import React, { Suspense, useState } from "react"
import { Outlet } from "react-router-dom"
import "@/app/styles/index.scss"
import { useTheme } from "@/app/providers/ThemeProvider/lib/useTheme"
import { classNames } from "@/shared/lib/classNames/classNames"
import { Navbar } from "@/widgets/Navbar"
import { Sidebar } from "@/widgets/Sidebar"
import { AppRouter } from "@/app/providers/Router"

const App = () => {
    const { theme } = useTheme()

    return (
        <div
            data-testid={"App.DataTestId"}
            className={classNames('App', {}, [theme])}
        >
            <Suspense fallback={''}>
                <Navbar />
                <div className={'content-page'}>
                    <Sidebar />
                    <AppRouter />
                </div>
                <h1 data-testid={"Platform"}>PLATFORM={__PLATFORM__}</h1>

                <Outlet />
            </Suspense>

        </div>
    )
}

export default App