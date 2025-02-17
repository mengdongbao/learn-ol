import mitt from 'mitt'
import type { IHttpEvents } from './http'

export type IMittEvent = {
  [_ in IHttpEvents]: void
}

let _mitt: ReturnType<typeof mitt<IMittEvent>> | null = null

/**
 * 全局事件总线
 * @returns
 */
export function useMitt() {
  if (_mitt === null) {
    _mitt = mitt<IMittEvent>()
  }
  return _mitt
}
