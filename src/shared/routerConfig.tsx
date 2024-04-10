import { CarsPage } from '../pages/CarsPage'
import UsersPage from '../pages/UsersPage'
import { type RouteProps } from 'react-router-dom'

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  CARS = 'cars',
  USERS = 'users',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.CARS]: '/cars',
  [AppRoutes.USERS]: '/users'
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.CARS]: {
    path: RoutePath.cars,
    element: <CarsPage />,
  },
  [AppRoutes.USERS]: {
    path: `${RoutePath.users}`,
    element: <UsersPage />,
  },
}
