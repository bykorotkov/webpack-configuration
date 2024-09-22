import { classNames } from "@/shared/lib/classNames/classNames"
import cls from './Main.module.scss'
import { useTranslation } from "react-i18next"

interface MainProps {
    className?: string
}

const Main = ({className}: MainProps) => {
    const {t} = useTranslation('main')

    return (
        <h1 className={classNames(cls.Main, {}, [className])}>
            {t('Главная страница')}
        </h1>
    )
}

export default Main