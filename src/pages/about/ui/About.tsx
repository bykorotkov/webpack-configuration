import React from 'react';
import { useTranslation } from "react-i18next"
const About = () => {
    const {t} = useTranslation('about')

    return (
        <h1>
            {t('О нас')}
        </h1>
    );
};

export default About;