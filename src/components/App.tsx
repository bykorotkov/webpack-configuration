import React, {useState} from 'react';
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import imagePng from '@/assets/bannerCareerTablet1.png'
import imageJpg from '@/assets/TourBgImage.jpg'
import ImageSvg from '@/assets/closeIcon.svg'
import '../styles/index.scss'

function TODO() {
    TODO2()
}

function TODO2() {
    // throw new Error();
}

export const App = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => {
        setCount(prev => prev + 1 )
        TODO()
    }
    // TODO(213123)
    // if(__PLATFORM__ === 'desktop') {
    //     return <div>ISDESKTOPPLATFORM</div>
    // }
    //
    // if(__PLATFORM__ === 'mobile') {
    //     return <div>ISMOBILEPLATFORM</div>
    // }
    //
    // if(__ENV__ === 'development') {
    //     // addDevtools()
    // }

    return (
        <div data-testid={'App.DataTestId'} className='App Light'>
            <h1 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img width={300} height={300} src={imagePng} alt={''} />
                <img width={300} height={300} src={imageJpg} alt={''} />
            </div>
            <div>
                <ImageSvg color={'blue'}  width={50} height={50} />
            </div>
            <Link to={'/about'}>about</Link>
            <br />
            <Link to={'/shop'}>shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}>increment</button>
            <Outlet />
        </div>
    );
};
