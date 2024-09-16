import React from "react"
import { Link, Outlet } from "react-router-dom"
import imagePng from "@/assets/bannerCareerTablet1.png"
import imageJpg from "@/assets/TourBgImage.jpg"
import ImageSvg from "@/assets/closeIcon.svg"
import "@/app/styles/index.scss"
import { useTheme } from "@/app/providers/ThemeProvider/lib/useTheme"
import { classNames } from "@/shared/lib/classNames/classNames"

export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div
            data-testid={"App.DataTestId"}
            className={classNames('App', {}, [theme])}
        >
            <h1 data-testid={"Platform"}>PLATFORM={__PLATFORM__}</h1>
            <button onClick={toggleTheme}>Переключить тему</button>
            <div>
                <img
                    width={300}
                    height={300}
                    src={imagePng}
                    alt={""}
                />
                <img
                    width={300}
                    height={300}
                    src={imageJpg}
                    alt={""}
                />
            </div>
            <div>
                <ImageSvg
                    color={"blue"}
                    width={50}
                    height={50}
                />
            </div>
            <Link to={"/about"}>about</Link>
            <br />
            <Link to={"/shop"}>shop</Link>
            <Outlet />
        </div>
    )
}
