import React, { Suspense } from "react"
import { createBrowserRouter, Route, Routes } from "react-router-dom"
import App from "@/app/App"
import { About } from "@/pages/about"
import { Shop } from "@/pages/shop"
import { routeConfig } from "@/shared/config/routeConfig/routeConfig"

// const AppRouter = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         children: [
//             {
//                 path: '/about',
//                 element: <Suspense fallback={'Loading...'}><About /></Suspense>
//             },
//             {
//                 path: '/shop',
//                 element: <Suspense fallback={'Loading...'}><Shop /></Suspense>
//             },
//         ]
//     },
// ]);

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className={'page-wrapper'}>
                                {element}
                            </div>
                        )}

                    />
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter