import {createRoot} from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router-dom"
import ThemeProvider from "@/app/providers/ThemeProvider/ui/ThemeProvider"
import { AppRouter } from "@/app/providers/Router"
import { render } from "react-dom"
import { App } from "@/app/App"

// const root = document.getElementById('root')
//
// if (!root) {
//     throw new Error('root is not found')
// }
//
// const container = createRoot(root)
//
// container.render(
//     <ThemeProvider>
//         <RouterProvider router={AppRouter} />
//     </ThemeProvider>
// );

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
