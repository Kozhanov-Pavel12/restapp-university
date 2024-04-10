import { useEffect } from "react"
import { useCarsStore } from "../store/carsStore"

export const useCarsList = () => {
    const cars = useCarsStore(state => state.cars)
    const getData = useCarsStore(state => state.getData)

    useEffect(() => {
        getData()
    }, [getData])

    return {
        cars: cars
    }
}