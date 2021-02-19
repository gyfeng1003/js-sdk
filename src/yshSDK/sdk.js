import {CLIENT_TYPE_ANDROID, CLIENET_TYPE_IOS} from './const'
import getSourceType from './sourceType'
import getAppType from './appType'
import {androidWebViewJavascriptBridge, iOSWebViewJavascriptBridge} from './javascriptBridge'
import native from './native'

var demotion = {} // 降级方案
class wehotelSDK {
  constructor() {
    this.state = false   //false native是否对容器注入完成
    this.clientType = getAppType() // 系统类型IOS/ANDROID
    this.debug = this.clientType ? false : true// 调试模式
    this.isAndroid = this.clientType === CLIENT_TYPE_ANDROID // 是否是Android客户端  boolean
    this.isIOS = this.clientType === CLIENET_TYPE_IOS // 是否是iOS客户端   boolean
    this.sourceType = getSourceType() // 国内app/国际app
    this.appkey = ''//区分业务线、可用哪些功能
    this.api = getApiArr(native)//native中的api列表
    this.register = []//自定义函数
    this.readyCallbackList = []//任务队列的数组
    this.noop = function () {}//初始化api指向空函数
    this.serviceApi = []//服务端获取的api列表
    for (let i = 0, len = this.api.length; i < len; i++) {
      this[this.api[i].key] = this.noop
    }
  }

  static getInstance () {
		if (!this.instance) {
			this.instace = new wehotelSDK()
		}
		return this.instace
	}

  //非调试模式下进来之后自执行初始化
  init() {
    if (!this.debug) {
      initWebViewBridge(webViewBridgeCallback)
    }
    if (this.debug && !this.state) {  //调试模式
      this.state = true
      initWebViewBridge(webViewBridgeCallback)
    }
  }

  /*注册函数*/
  /**
   *  @method registerHandler
   *  @param handleName 注册函数名
   *  @param callback 触发执行回调
   */
  registerHandler (handleName, callback) {
    this.register.push({
      handleName: handleName,
      callback: callback
    })
    console.log('%c 注册事件', 'color: red')
    console.log(handleName, callback)
    if (window.WebViewJavascriptBridge && this.state) {
      callRegister(window.WebViewJavascriptBridge)
    }
  }

  ready (callback) {
    typeof callback === 'function' && this.readyCallbackList.push(callback)
    callReady()
  }

  setAppKey (appKey) {
    if (!this.debug) {
      this.appkey = appKey
      // wehotelSDK.sign = obj.sign;
      // wehotelSDK.timestamp = obj.timestamp;
      getNativeApi()
    }
  }
}

let jssdk = wehotelSDK.getInstance()
jssdk.init()

//格式化回调函数中的data
function callHandlerCallback (callback) {
	return function (data) {
		if (typeof data === 'string') {
			data = JSON.parse(data)
		}
		callback(data)
	}
}

/**
 *  返回一个正确的register回调函数
 */
function callRegisterCallback (callback) {
	return function (data, responseCallback) {
		if (typeof data === 'string') {
			data = JSON.parse(data)
		}
		callback(data, responseCallback)
	}
}

function getApiArr (obj, key, arr) {
  var apiArr = arr || []
  if (typeof obj === 'string') {
    apiArr.push({ key: key, api: obj })
  } else {
    Object.keys(obj).forEach((key) => {
      getApiArr(obj[key], key, apiArr)
    })
  }
  return apiArr
}

/**
 * 初始化bridge注入
 * @param {function} callback
 */
function initWebViewBridge (callback) {
  if (jssdk.debug) {
    callback()
  } else {
    switch (jssdk.clientType) {
    case 'android':
      androidWebViewJavascriptBridge(callback)
      break
    case 'iOS':
      iOSWebViewJavascriptBridge(callback)
      break
    }
  }
}

function webViewBridgeCallback (bridge) {
  if (jssdk.clientType === 'android' && !jssdk.debug && bridge) {
    /**
     * Android 客户端初始化
     */
    bridge.init(function (message, responseCallback) {
      responseCallback()
    })
  }
  //bridge初始化之后初始化api函数
  if (!jssdk.debug) {
    for (let i = 0, len = jssdk.api.length; i < len; i++) {
      jssdk[jssdk.api[i].key] = function (option) {
        let opt
        if (typeof option == 'function') {
          opt = {}
          opt.success = option
        } else {
          opt = option || {}
        }
        let data = opt.data || {},
          success = opt.success || jssdk.noop

        bridge.callHandler(jssdk.api[i].api, data, callHandlerCallback(success))
      }
    }
  }

  //初始化完成，执行自定义注册函数
  !jssdk.debug && callRegister(bridge)

  //初始化完成，state= true；
  jssdk.state = true
  if (!jssdk.debug) {
    getNativeApi()
  } else {
    callReady()
    callDemotion()
  }
}

 //获取appKey之后和bridge初始化完成之后都会执行这个方法
 function getNativeApi () {
  if (!jssdk.debug && jssdk.appkey && jssdk.state) {
    jssdk.getNativeApi({
      data: { JSID: jssdk.appkey }, success: function (data) {
        data = data || {}
        if (data.msgCode == 100) {
          let result = data.result || ''
          jssdk.serviceApi = result.split('&')
          console.log('服务端api列表:')
          console.log(jssdk.serviceApi)
          //执行任务列表中的任务，并清空
          callReady()
        }
      }
    })
  } else {
    console.log('没有初始化appkey或者处于debug模式或者bridge初始化未完成')
  }
}

 // 降级处理
function callReady () {
  console.log('任务列表')
  if (jssdk.state) {
    for (let i = 0, len = jssdk.readyCallbackList.length; i < len; i++) {
      jssdk.readyCallbackList[i].call(jssdk)
    }
    jssdk.readyCallbackList = []
  }
}

function callDemotion (handleName, callback) {
  if (handleName && callback) {
    jssdk[handleName] = demotion[handleName] = callback
  } else {
    for (let i = 0; i < jssdk.api.length; i++) {
      if (hasOwn(demotion, jssdk.api[i].key)) {
        jssdk[jssdk.api[i].key] = demotion[jssdk.api[i]]
      } else {
        jssdk[jssdk.api[i].key] = function () {
        }
      }
    }
  }
}

function callRegister (bridge) {
  if (jssdk.state) {
    for (let i = 0, len = jssdk.register.length; i < len; i++) {
      bridge.registerHandler(jssdk.register[i].handleName, callRegisterCallback(jssdk.register[i].callback))
    }
  } else {
    console.log(jssdk.register)
  }
}

function hasOwn (obj, key) {
	return hasOwnProperty.call(obj, key)
}

export default jssdk