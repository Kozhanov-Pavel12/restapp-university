import axios from 'axios'

export const getCarsData = async () => {
    try {
        const response = await axios.get('https://myfakeapi.com/api/cars')
        const cars = await response.data.cars
        return cars || []
    } catch (e) {
        console.log(e)
    }
}
