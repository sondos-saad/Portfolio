import React, { useState, useEffect } from 'react';
import './nav.css';
import { Link } from 'react-scroll';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { MdWork } from 'react-icons/md';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['logo', 'about', 'skills', 'portfolio', 'contact'];
            const scrollPosition = window.scrollY + 100;
            const selectedSection = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
                }
                return false;
            });

            setActiveNav(selectedSection || '');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav>
            <Link
                to="logo"
                spy={true}
                smooth={true}
                offset={-100}
                duration={50}
                className={activeNav === 'logo' ? 'active' : ''}
            >
                <AiOutlineHome />
            </Link>
            <Link
                to="about"
                spy={true}
                smooth={true}
                offset={20}
                duration={50}
                className={activeNav === 'about' ? 'active' : ''}
            >
                <AiOutlineUser />
            </Link>
            <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={20}
                duration={50}
                className={activeNav === 'skills' ? 'active' : ''}
            >
                <BiBook />
            </Link>
            <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={20}
                duration={5}
                className={activeNav === 'portfolio' ? 'active' : ''}
            >
                <MdWork />
            </Link>
            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={20}
                duration={50}
                className={activeNav === 'contact' ? 'active' : ''}
            >
                <BiMessageRoundedDetail />
            </Link>
        </nav>
    );
};

export default Nav;
