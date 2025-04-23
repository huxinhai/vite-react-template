import { makePersistable } from 'mobx-persist-store'

class UserStore {
  userId = ''
  token = ''
  constructor() {
    makeAutoObservable(this)
    void this.#initializeStore()
  }

  async #initializeStore() {
    await makePersistable(this, {
      name: 'user',
      properties: ['token'],
      storage: localStorage
    })
  }

  setToken(token: string) {
    this.token = token
  }
}

export default UserStore
