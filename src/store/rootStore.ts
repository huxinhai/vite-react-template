import UserStore from '@/store/user'

export class RootStore {
  userStore: UserStore

  constructor() {
    this.userStore = new UserStore()
  }
}
