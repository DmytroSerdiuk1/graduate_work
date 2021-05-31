import React from 'react'
import { Link } from 'react-router-dom';
import './Main.scss'

const Slide = ({
    backgroundImageSlide,
    titleStyle = {fontFamily: "sans", fontWeight: 700, color: '#3C3C3C'},
    title,
    subtitle,
    linkTo = '',
    linkText,
    white
}) => {
    const whites = white ? 'white' : '';

    return (
        <div className="promo-slide" style={{backgroundImage: `url(${backgroundImageSlide})`}}>
            <h1 style={titleStyle} dangerouslySetInnerHTML={{__html: title}} className={`promo-slide-title ${whites}`}></h1>
            <p className={`promo-slide-subtitle ${whites}`}>{subtitle}</p>
            <Link to={linkTo} className="promo-slide-button">{linkText}</Link>
        </div>
    )
}

export default Slide
