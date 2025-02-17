/**
 * 用户信息读取接口
 */
export interface IUserReadonly<T = { [_: string]: unknown }> {
  id: string | number
  name: string
  role: string | number
  token: string
  info: T
}

export interface IUserReadonlyStatic {
  new (info: IUserReadonly): IUser
  fromStorage(key?: string): IUser
  hasTokenInStorage(key?: string): boolean
}

export interface IUserWriteable {
  logout(key: string): void
  logout(key: string): Promise<void>
}

export interface IUser extends IUserReadonly, IUserWriteable {}

export class User implements IUser {
  #id: string | number
  #name: string
  #role: string | number
  #token: string
  #info: { [_: string]: unknown }

  constructor(info: IUserReadonly) {
    this.#id = info.id
    this.#name = info.name
    this.#role = info.role
    this.#token = info.token
    this.#info = info.info
  }
  get token() {
    return this.#token
  }
  get id() {
    return this.#id
  }
  get name() {
    return this.#name
  }
  get role() {
    return this.#role
  }
  get info() {
    return this.#info
  }

  static fromStorage(key: string = 'user') {
    let str: string = ''
    const sessionResult = sessionStorage.getItem(key)
    const localResult = localStorage.getItem(key)

    if (sessionResult !== null) {
      str = sessionResult
    } else if (localResult !== null) {
      str = localResult
    } else {
      throw new Error('无法获取用户信息')
    }
    const obj = JSON.parse(str)
    return new User(obj)
  }

  /**
   * 从 storage 中判断是否有 token
   * @param key 用户信息 key
   */
  static hasTokenInStorage(key: string = 'user') {
    try {
      const user = User.fromStorage(key)
      return !!user.token
    } catch (err) {
      return false
    }
  }

  logout(key: string): void
  logout(key: string): Promise<void>
  logout(key: string): void | Promise<void> {
    sessionStorage.removeItem(key)
    localStorage.removeItem(key)
  }
}
