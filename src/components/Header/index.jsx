/* eslint-disable react/prop-types */
import { useState } from 'react';
import { GithubLogo } from 'phosphor-react';
import { Link } from 'react-scroll';
import Hamburguer from './Hamburger';
import { Logo } from '../Logo';

function Header({ links }) {
  const [isOpened, setIsOpened] = useState(false);
  function handleClick() {
    setIsOpened(!isOpened);
  }

  const background = isOpened
    ? 'bg-secondaryColors-400 text-primaryColors-300'
    : 'bg-primaryColors-300 text-secondaryColors-400';

  return (
    <header
      className={`w-full fixed z-50 top-0 left-0 shadow-sm ${background} py-4 px-6 flex justify-center`}
    >
      <div className="w-full md:max-w-3xl lg:max-w-4xl flex items-center justify-between transition-colors ease-in">
        <h1
          className={`text-2xl font-bold ${!isOpened ? 'text-secondaryColors-500' : 'text-primaryColors-300'}
            } transition-colors`}
        >
          <span>
            <Logo color={isOpened ? "#DFDDAE" : "#5D402A"} className="relative max-h-10 w-full z-50" />

          </span>
        </h1>
        <nav className={`${isOpened ? 'active' : null}`}>
          <Hamburguer click={handleClick} />
          <ul
            className={`w-full md:w-auto md:h-auto font-bold md:font-normal absolute top-12 md:top-0 left-0 flex flex-col md:flex-row items-center gap-y-10 
            md:gap-y-12 md:pt-0 ${background} ${isOpened ? 'mt-[24px] h-screen visible pt-4' : 'h-0 pt-0 invisible'
              } md:static transition-colors ease-in text-2xl md:text-base md:visible`}
          >
            {links.map((link, i) => (
              <li
                key={i}
                className="block sm:inline-block md:ml-8 scroll-smooth cursor-pointer"
              >
                <Link
                  to={link.href}
                  spy={true}
                  smooth={true}
                  offset={-72}
                  duration={500}
                  onClick={() => setIsOpened(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="uppercase md:hidden py-4 px-8 bg-white text-secondaryColors-400 text-base rounded-full">
              <a href="https://www.instagram.com/meca4m/" target="_blank" rel="noreferrer">Conheça um pouco mais</a>
            </li>
            <li className="text-base font-normal">
              <a
                href="https://github.com/JonathanPR0/80s-Vibes"
                className="flex flex-row md:hidden p-2" target="_blank" rel="noreferrer"
              >
                <GithubLogo size={24} className="mr-1" />
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
