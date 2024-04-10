import axios from 'axios'

export const getUsersData = async () => {
    try {
        const response = await axios.get('https://myfakeapi.com/api/users')
        const users = await response.data.Users
        return users || []
    } catch (e) {
        console.log(e)
    }
}
