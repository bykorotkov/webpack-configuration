import { RouteProps } from "react-router-dom"
import About from "@/pages/about/ui/About"
import { Shop } from "@/pages/shop"
import { App } from "@/app/App"

export enum AppRoutes {
    MAIN = 'Main',
    ABOUT = 'About',
    SHOP = 'Shop'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.SHOP]: '/shop'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.ABOUT]: {
        path: RoutePath.About,
        element: <About />
    },
    [AppRoutes.SHOP]: {
        path: RoutePath.Shop,
        element: <Shop />
    },
    [AppRoutes.MAIN]: {
        path: RoutePath.Main,
        element: <App />
    }
}