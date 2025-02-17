/**
 * 事件总线类型
 */
export interface IBusEvent {
  emit(type: string | symbol, payload?: unknown): void
  once(type: string | symbol, handler: Function): void
  on(type: string | symbol, handler: Function): void
  off(type: string | symbol): void
}
