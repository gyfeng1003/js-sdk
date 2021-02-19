const native = {
	/**
	 * 获取用户登录态
	 * 未登录则跳转到native登录页
	 */
	'login': 'BTLoginPlugin/login',
	/**
	 * 获取当前native版本已实现的API
	 */
	'getNativeApi': 'BTPublicPlugin/getNativeApi',

	/**
	 * 获取地理位置信息
	 */
	'gainLocation': 'BTPublicPlugin/gainLocation',
	/**
	 * 获取设备信息
	 */
	'getClientInfo': 'BTPublicPlugin/getClientInfo',
	/**
	 * 打开新的web页面
	 */
	'openNewWebView': 'BTPublicPlugin/openNewWebView',
	/**
	 * 打开新的web页面(v2切换v1)
	 */
	'openV1WebView': 'BTRouterPlugin/openV1WebView',
	/**
	 * 关闭当前web页面
	 */
	'closeWebView': 'BTPublicPlugin/closeWebView',
	/**
	 * 显示一个弹窗
	 */
	'showDialog': 'BTPublicPlugin/showDialog',
	/**
	 * 发起拨打电话
	 */
	'callPhone': 'BTPublicPlugin/callPhone',
	/**
	 * 发起支付
	 */
	'payOrder': 'BTPayPlugin/payOrder',
	'payOrderSDK': 'BTPayPlugin/payOrderSDK',
	/**
	 * 初始化标题栏
	 */
	'initTitle': 'BTTitlePlugin/initTitle',
	/**
	 * 标题分享
	 */
	'share': 'BTTitlePlugin/share',
	/**
	 * 标题栏后退按钮,前往特定的链接
	 */
	'goUrl': 'BTTitlePlugin/goUrl',
	/**
	 * 打开发票列表页面
	 */
	'openInvoiceListVC': 'BTRouterPlugin/openInvoiceListVC',
	/**
	 * 打开优惠券列表页面
	 */
	'openDiscountListVC': 'BTRouterPlugin/openDiscountListVC',
	/**
	 * 打开常用联系人列表页面
	 */
	'openCommonlyusedPassengerListVC': 'BTRouterPlugin/openCommonlyusedPassengerListVC',
	/*
	 * 打开日历选择器
	 */
	'openCalendarVC': 'BTRouterPlugin/openCalendarVC',
	/**
	 * 打开地图页面
	 */
	'openMapVC': 'BTRouterPlugin/openMapVC',
	/**
	 * 打开酒店点评列表
	 */
	'openCommentVC': 'BTRouterPlugin/openCommentVC',

	/**
	 * 打开图片浏览页面，效果同app中酒店详情页点击图片看大图
	 */
	'openImageSwitcher': 'BTRouterPlugin/openImageSwitcher',
	/**
	 * 通知客户端选中的城市
	 */
	'selectCity': 'BTCityPlugin/selectCity',
	/**
	 * 获取客户端选中城市
	 */
	'getSelectCity': 'BTCityPlugin/getSelectCity',
	/**
	 * 获取客户端保存的城市数据
	 */
	'getCityList': 'BTCityPlugin/getCityList',
	/**
	 * 打开通信录获取电话号码
	 */
	'openContactsVC': 'BTRouterPlugin/openContactsVC',
	/**
	 * 打开loadingView，lodingView在当前容器是一个单例类，如果当前容器已经呈现有loadingVIew，再次调用这个函数没有操作
	 */
	'openLoadingV': 'BTPublicPlugin/openLoadingView',
	/**
	 * 关闭loadingView，lodingView在当前容器是一个单例类，如果当前容器已经关闭loadingVIew，再次调用这个函数没有操作
	 */
	'closeLoadingV': 'BTPublicPlugin/closeLoadingView',
	/**
	 * 跳转到首页
	 */
	'gotoHomePage': 'BTRouterPlugin/gotoHomePage',
	/**
	 * 跳转到钱包页
	 */
	'jumpWalletHome': 'BTWalletPlugin/jumpWalletHome',
	/**
	 * 跳转到充值页
	 */
	'jumpBalancePage': 'BTWalletPlugin/jumpBalancePage',
	/**
	 * 跳转到评论填写
	 */
	'editHotelComment': 'BTRouterPlugin/editHotelComment',
	/**
	 *  获取标题栏以及物理返回键 控制权限
	 */
	'registTitleControler': 'BTTitlePlugin/registTitleControler',
	/**
	 * 释放标题栏以及物理返回键 控制权限
	 */
	'unregistTitleControler': 'BTTitlePlugin/unregistTitleControler',
	/**
	 * 获取收货地址
	 */
	'getDeliveryAddress': 'BTRouterPlugin/getDeliveryAddress',
	/**
	 *
	 */
	'refreshVC': 'BTPublicPlugin/refreshVC',
	/**
	 * 顶栏透明渐变
	 */
	'startTitleAnimation': 'BTTitlePlugin/startTitleAnimation',
	/*
	 * 获取本地图片
	 * */
	'selectImage': 'BTPublicPlugin/selectImage',
	/**
	 * 打开修改个人资料
	 */
	'modifyUserInfo': 'BTRouterPlugin/modifyUserInfo',
	/*跳轉到社交頁面*/
	'jumpSocialHome': 'BTSocialPlugin/jumpSocialHome',
	'jumpSocialTopicDetail': 'BTSocialPlugin/jumpSocialTopicDetail',
	'jumpSocialTopicTag': 'BTSocialPlugin/jumpSocialTopicTag',
	'jumpSocialHotelTag': 'BTSocialPlugin/jumpSocialHotelTag',
	'jumpSocialTopicUserCenter': 'BTSocialPlugin/jumpSocialTopicUserCenter',
	'jumpSocialVC': 'BTRouterPlugin/jumpSocialVC',
	'openBrowser': 'BTRouterPlugin/openBrowser',

	// 跳转到群聊页面
	'enterGroupConversation': 'BTSocialPlugin/enterGroupConversation',
	'jumpMemberPoint': 'BTRouterPlugin/jumpMemberPoint',

	'pushRefreshNotification': 'BTRouterPlugin/pushRefreshNotification',

	// 房控
	'openRoomEquipmentController': 'BTPublicPlugin/openRoomEquipmentController',

	// 拉起分期乐
	'openFqlSDK': 'BTRouterPlugin/openFqlSDK',
	// 打开三方App
	'openOtherApp': 'BTRouterPlugin/openOtherApp',
	// 播放视频
	'openVideo': 'WHnativePlugin/videoPlay',
	// h5本地请求
	'networkRequest': 'BTPublicPlugin/networkRequest',
	// 选择语言
	'switchLanguage': 'WHnativePlugin/switchLanguage',
	// 打开地图
	'openMap': 'BTPublicPlugin/around_map',
	// 打开路线规划
	'openRouterMap': 'BTPublicPlugin/router_map',
	// 扫描护照
	'openScanCard': 'BTPublicPlugin/scan_card',
	// 意见反馈
	'openAskQuestion': 'BTPublicPlugin/ask_que',
	// 收藏地图
	'collectMap': 'BTPublicPlugin/collect_map',
	// 获取系统语言
	'getSystemLanguage': 'BTPublicPlugin/getlanguage',
	// 拉起WIFIPhone
	'wiPhoneLogin': 'BTPublicPlugin/WIPhoneLogin',
	// 退出登录loginOut
	'loginOut': 'BTPublicPlugin/logout',
	// 唤起邀请码
	'invitationCode': 'BTPublicPlugin/InvitationCode',
	// 电信的接口是否轮询中
	'intProtocol': 'BTPublicPlugin/isPollingScanCard',
	// 拉起摄像头
	'takePhoto': 'BTPublicPlugin/TakePhoto',
	// 绑定手机号
	'bindSelfPhone': 'BTPublicPlugin/bindSelfPhone',
	// 获取电信用户失效revertStatus状态
	'getUserInfoFromServer': 'BTPublicPlugin/getUserInfoFromServer',
	// 分享
	'openShare': 'BTTitlePlugin/share',
	// 获取原生存储
	'getStore': 'BTPublicPlugin/getKeyValue',
	// 设置原生存储
	'setStore': 'BTPublicPlugin/saveKeyValue',
	// 健身、场馆页面打开地图
	'listBussinessMap': 'BTPublicPlugin/listBussinessMap',
	// 判断是否是谷歌市场
	'isGooglePlat': 'BTPublicPlugin/isGooglePlat',
	// 是否是第一次 进入app
	'getMemCacheKeyValue': 'BTPublicPlugin/getMemCacheKeyValue',
	'setMemCacheKeyValue': 'BTPublicPlugin/setMemCacheKeyValue',
	'showToast': 'BTPublicPlugin/showToast',
	//手机区号
	'nationalCode': 'BTPublicPlugin/openNationalCodeList',
	// APP是否安装
	'isAppInstall': 'BTPublicPlugin/isAppInstall',
	// 判断youtube是否可用
	'isYoutubeAvailable': 'BTPublicPlugin/isYoutubeAvailable',
	// 打开翻译
	'openTranslation': 'BTPublicPlugin/openTranslationModule',
	// 跳转原生业务
	'openRouterPath': 'BTPublicPlugin/openRouterPath',
	   //分享
	'shareAPI': 'BTTitlePlugin/shareAPI',
	// 唤醒修改补全手机号
	'completingPhoneNumber': 'BTLoginPlugin/completingPhoneNumber',
	// 打开原生页面
	'openNativePage': 'BTPublicPlugin/openRouterPage',
}

export default native
