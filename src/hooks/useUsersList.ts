import { useEffect } from "react"
import { useUsersStore } from "../store/usersStore"

export const useUsersList = () => {
    const users = useUsersStore(state => state.users)
    const getData = useUsersStore(state => state.getData)

    useEffect(() => {
        getData()
    }, [getData])

    return {
        users: users
    }
}