import './navbar.scss';
import { useState } from 'react';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        console.log(window.pageYOffset);

        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    console.log(isScrolled);

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" alt="" />
                
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
                </div>
                <div className="right">
                    <Search  className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_1280.jpg" 
                    alt="" />

                    <div className="profile">
                    <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Others</span>
                        </div>
                    </div>

                </div>
            </div>
            

        </div>
    )
}

export default Navbar
