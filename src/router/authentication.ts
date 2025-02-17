import type { RouteLocationNormalizedGeneric } from 'vue-router'

interface IAuthRoute {
  (to: RouteLocationNormalizedGeneric): boolean
}

const _whiteList: IAuthRoute[] = [(to) => to.name === 'login']

/**
 * 不需要鉴权的名单(鉴权白名单)
 * @param to
 * @param reverse 是否反转判决结果(白名单转黑名单)
 * @returns
 */
export function inWhiteList(to: RouteLocationNormalizedGeneric, reverse: boolean = false) {
  const result = !!_whiteList.find((assert) => {
    return assert(to)
  })
  return reverse ? !result : result
}
