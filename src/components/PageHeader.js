import React, {useEffect, useState} from 'react';
import '../style/Header.css';
export default function PageHeader() {

    const [showHeader, setShowHeader] = useState(false);

    const headerTransition = () => {
        if(window.scrollY > 100) { setShowHeader(true) }
        else { setShowHeader(false) }
    }
    useEffect(() => {
        window.addEventListener('scroll', headerTransition);
        return () => window.removeEventListener('scroll', headerTransition)
    },[])
    return(
        <div className={`header-container ${showHeader && 'header-container-trans'}`}>
            <div className='header-content'>
                <img className='header-logo' src='https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg' alt='logo'/>
                <img className='header-avatar' src='https://www.citypng.com/public/uploads/small/31634946729ohd4odcijurvd40v45hl8lft4w1qmw8bx6fpldgscjmqvhptmmk00uh8j1ol5e20u2vd13ewb2ojyzg60xau3z3mkymxo7ydaql1.png' alt='login'/>
            </div>
        </div>
    )
}