import {mpAuthStore, passportAuthStore} from "../stores/auth-store";

/**
 * 在这里可以处理一些全局的错误码,比如登录失效需要更新全局的登录状态时可在这里处理
 * @param errorCode
 * @constructor
 */
export default function ErrorCodeHandle(errorCode) {

  if (errorCode === -15603 /* 登录失效，请重新登录 */) {
   //todo:错误码-15603时集中处理
  }


}


