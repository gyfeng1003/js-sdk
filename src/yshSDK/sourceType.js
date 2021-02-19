/* eslint-disable */
import {
  BGSH_OVERSEA,
  BGSH_CHINA
} from './const';

/**
 * 获取APP渠道类型，区分是在锦江APP中还是在铂涛旅行APP中
 * @return {string}
 */
export default function getSourceType(u) {
  let ua = u || navigator.userAgent;
  if (ua.indexOf(BGSH_OVERSEA) !== -1) {
    return BGSH_OVERSEA;
  } else if (ua.indexOf(BGSH_CHINA) !== -1) {
    return BGSH_CHINA;
  } else {
    return '';
  }
}
