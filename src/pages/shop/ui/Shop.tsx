import React from 'react';
import { useTranslation } from "react-i18next"

const Shop = () => {
    const {t} = useTranslation('shop')

    return (
        <h1>
            {t('Магазин')}
        </h1>
    );
};

export default Shop;