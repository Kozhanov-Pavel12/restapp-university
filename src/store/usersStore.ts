import { getUsersData } from '../api/usersService'
import { create } from 'zustand'

interface State {
    users: any[]
}
  
interface Action {
  getData: () => Promise<void>
}

export type UsersState = State & Action

export const useUsersStore = create<UsersState>((set, get) => ({
  users: [],
  getData: async() => {
    const { users } = get()
    if(users.length) return
    const response = await getUsersData()
    if(!response) return
    set(() => ({
        users: response
    }))
  }
}))
