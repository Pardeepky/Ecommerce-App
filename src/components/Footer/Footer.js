import React from 'react'
import classes from './footer.module.css'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <>
            <footer className={classes.footer}>
                <div className={classes['footer-title']}>
                <h1>The Generics</h1>
                </div>
                <div className={classes['footer-icons']}>
                    <ul>
                        <li><SocialIcon url="https://youtube.com"/></li>
                        <li><SocialIcon url="https://spotify.com"/></li>
                        <li><SocialIcon url="https://facebook.com"/></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer