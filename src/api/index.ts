import { httpEvents, type IHttpEvents } from '@/utils/http'
import type { IBusEvent } from '@/utils/types/busEvent'
import { type IUserReadonlyStatic } from '@/utils/users/users'
import axios, { type AxiosInstance } from 'axios'

/**
 * axios 简单实例
 * @returns
 */
export function axiosPlainInstance(): AxiosInstance {
  return axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 1000 * 10,
  })
}

export function axiosInstance() {
  const ins = axiosPlainInstance()
}

/**
 * 请求拦截器: 添加 token header
 * @param axiosInstance
 * @param tokenName
 * @param UserClass
 */
export function addTokenReqInterceptors(
  axiosInstance: AxiosInstance,
  tokenName = 'token',
  UserClass: IUserReadonlyStatic,
) {
  axiosInstance.interceptors.request.use((config) => {
    const hasToken = UserClass.hasTokenInStorage()
    if (hasToken) {
      const user = UserClass.fromStorage()
      config.headers.set(tokenName, user.token)
    }
    return config
  })
}

/**
 * 响应拦截器: 添加 http 状态码事件
 * @param axiosInstance
 * @param bus
 */
export function addHttpEventResInterceptors(axiosInstance: AxiosInstance, bus: IBusEvent) {
  axiosInstance.interceptors.response.use((val) => {
    if (httpEvents.includes(`http:${val.status}` as IHttpEvents)) {
      bus.emit(`http:${val.status}`)
    }
    return val
  })
}
