import React from "react"
import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./Navbar.module.scss"
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink"
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher"

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div></div>

            <div className={classNames(cls.Links)}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={"/"}
                >
                    Главная
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={"/shop"}
                >
                    Магазин
                </AppLink>
                <AppLink
                    to={"/about"}
                    theme={AppLinkTheme.PRIMARY}
                >
                    О нас
                </AppLink>
            </div>
        </div>
    )
}
