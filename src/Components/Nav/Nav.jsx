import React, { useEffect, useState } from 'react'
import '../../App.css'

const Nav = () => {

    const [isMenuOpen, setisMobileOpen] = useState(false)

    const toggleMenu = ()=> {
        setisMobileOpen(!isMenuOpen)
    }

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
        <header>
            <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
                <ul>
                    <li className='nav__logo__link'>
                        <p className='nav__logo'>MK Furniture</p>
                    </li>
                </ul>
                <ul className='nav__link'>
                    <li><a className='nav__link__item' href="#about">About us</a></li>
                    <li><a className='nav__link__item' href="#products">Products</a></li>
                    <li><a className='nav__link__item' href="#offers">Offers</a></li>
                    <li><a className='nav__link__item' href="#contact">Contact us</a></li>
                </ul>
                {!isMenuOpen?
                    <button className='menu__bar' onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor"
                        >
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>:(
                    <button className='menu__bar' onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" >
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    )
                }
            </nav>
           { isMenuOpen?(
           <div className="mobile__nav">
                <ul className='nav__mobile__link'>
                    <li><a className='mobile__link__item' href="#about">About us</a></li>
                    <li><a className='mobile__link__item' href="#products">Products</a></li>
                    <li><a className='mobile__link__item' href="#Offers">Offers</a></li>
                    <li><a className='mobile__link__item' href="#contact">Contact us</a></li>
                </ul>
            </div>):(console.log("menu Closed"))
            }
        </header>
  )
}

export default Nav