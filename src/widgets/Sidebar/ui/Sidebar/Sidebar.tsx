import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./Sidebar.module.scss"
import React, { useState } from "react"
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher"
import { LangSwitcher } from "@/widgets/LangSwitcher"
import { useTranslation } from "react-i18next"
import { Button, ThemeButton } from "@/shared/ui/Button/Button"

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t, i18n } = useTranslation()

    const toggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, { [cls.Collapsed]: collapsed }, [className])}>
            <div className={cls.TopBar}>
                <Button
                    className={cls.TopBarButton}
                    theme={ThemeButton.CLEAR}
                    onClick={toggle}
                >
                    {t("Меню")}
                </Button>
            </div>


            <div className={cls.Switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}