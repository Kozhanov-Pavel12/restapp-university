import { RoutePath } from "./routerConfig";

export interface ItemType {
    path: string;
    text: string;
    authOnly?: boolean
}

export const ItemsList: ItemType[] = [
    {
        path: RoutePath.cars,
        text: 'Машины',
        authOnly: true
    },
    {
        path: RoutePath.users,
        text: 'Пользователи'
    },
]