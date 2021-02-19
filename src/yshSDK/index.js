import WeSDK from './sdk'

WeSDK.setAppKey('95b04967d08c42ad91b1d56ad7e7536a')
const setWeHotel = (callback) => {
	WeSDK.ready(() => {
		callback && callback()
	})
}

class YSHSDK {
  constructor() {
  }

	static getInstance () {
		if (!this.instance) {
			this.instace = new YSHSDK()
		}
		return this.instace
	}

  showLoading () {
		setWeHotel(() => {
			WeSDK.openLoadingV({})
		})
	}

	hideLoading () {
		setWeHotel(() => {
			WeSDK.closeLoadingV({})
		})
	}

	showToast (item) {
		setWeHotel(() => {
			WeSDK.showToast(item)
		})
	}

	// 设置标题
	setAppTitle (params) {
		let defaultOpt = {
			showLeftBT: true,
			showRightBT: false,
			showRightBTText: '',
			title: '',
			showTitle: true,
			transparent: false,
			showLine: false,
			suspension: false,
			setStatusBarBlackType: true
		}

		for (let i in params) {
			defaultOpt[i] = params[i]
		}

		setWeHotel(() => {
			WeSDK.initTitle({
				data: defaultOpt,
				success: () => {
				}
			})
		})
	}

	openBrowser (params) {
		setWeHotel(() => {
			WeSDK.openBrowser({
				data: { url: params.url }
			})
		})
	}

	// 监听返回
	watchAppBackBtn (handle) {
		this.backButtonCallBack = handle
    setWeHotel(() => {
      WeSDK.registerHandler('BTTitlePlugin/clickLeftBT', () => {
        this.backButtonCallBack && this.backButtonCallBack()
      })
    })
	}
}

export default YSHSDK