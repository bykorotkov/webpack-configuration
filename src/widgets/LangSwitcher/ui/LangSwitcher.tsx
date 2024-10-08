import { classNames } from "@/shared/lib/classNames/classNames"
import cls from "./LangSwitcher.module.scss"
import { useTranslation } from "react-i18next"
import React from "react"
import { Button, ThemeButton } from "@/shared/ui/Button/Button"

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const localeToggle = () => {
        if (i18n.language === "ru-RU") {
            i18n.changeLanguage((i18n.language = "en"))
        }

        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={localeToggle}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            {t("Язык")}
        </Button>
    )
}