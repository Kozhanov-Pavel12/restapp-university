import { getCarsData } from '../api/carsService'
import { create } from 'zustand'

interface State {
    cars: any[]
}
  
interface Action {
  getData: () => Promise<void>
}

export type CarsState = State & Action

export const useCarsStore = create<CarsState>((set, get) => ({
  cars: [],
  getData: async() => {
    const { cars } = get()
    if(cars.length) return
    const response = await getCarsData()
    if(!response) return
    set(() => ({
        cars: response
    }))
  }
}))
