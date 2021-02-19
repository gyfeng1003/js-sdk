/* eslint-disable */
import {
    CLIENT_TYPE_ANDROID,
    CLIENET_TYPE_IOS
} from './const';
/**
 * 获取客户端类型
 */
export default function getAppType(ua) {
    var u = ua||navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var isApp = (/wehotel/.test(u)||/botao/.test(u))
    if (isAndroid && isApp) {
        return CLIENT_TYPE_ANDROID;
    }
    if (isiOS && isApp) {
        return CLIENET_TYPE_IOS;
    }
    return '';
}
