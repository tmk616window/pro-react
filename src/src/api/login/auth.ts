import {client, authClient} from "../common/client"
import Cookies from "js-cookie"
import axios from 'axios'

import { SignUpParams, SignInParams } from "../../type/interfaces"

// サインアップ（新規アカウント作成）
export const signUp = (params: SignUpParams) => {
  return client.post("auth", params)
}

// サインイン（ログイン）
export const signIn = (params: SignInParams)  => {
  return client.post("auth/sign_in", params)
}

// サインアウト（ログアウト）
export const signOut = (params:any) => {
  return axios.delete("http://localhost/api/v1/auth/sign_out", {headers: params})  
}

// 認証済みのユーザーを取得
export const getCurrentUser = (params:any) => {
  if (!Cookies.get("_access_token") || !Cookies.get("_client") || !Cookies.get("_uid")) return
  return axios.get("http://localhost/api/v1/auth/sessions", {params: params,headers:params})
}
