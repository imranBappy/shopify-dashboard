import { AiOutlineMenuFold } from 'react-icons/ai'
import { MdDarkMode, MdOutlineForwardToInbox, MdOutlineLightMode } from 'react-icons/md'
import HeaderProfile from './HeaderProfile';
import { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs'
import HeaderProfileMenu from './HeaderProfileMenu';
const Header = ({ sidebar, showSidebar, blur, width }) => {
    const [theme, setTheme] = useState('dark')
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme('dark')
        } else {
            setTheme('lite')
        }
    }, [])

    useEffect(() => {
        localStorage.theme = theme;
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleTheme = () => {
        useState(theme === 'dark' ? setTheme('lite') : setTheme('dark'))
    }
    const [open, setOpen] = useState(false);
    return (
        <header className={` z-40   flex-grow flex-shrink w-full backdrop-blur-md right-0 top-0 fixed ${!blur && 'dark:bg-dark2'}  dark:border-b-[0.1px] dark:border-lite4 shadow-sm h-14 items-center px-2  flex flex-row justify-between  `}>
            <div className="flex flex-wrap relative">
                <div onClick={showSidebar} className={`icon_btn ease-in duration-150  -top-4 absolute ${sidebar ? 'left-[240px]' : 'left-[65px]'}`}>
                    <AiOutlineMenuFold />
                </div>
            </div>
            <div className=" flex flex-wrap gap-6">
                <ul className="flex flex-wrap gap-2 items-center">
                    <li onClick={handleTheme} className='icon_btn'>
                        {
                            theme == 'dark' ? <MdOutlineLightMode /> : <MdDarkMode />
                        }
                    </li>
                    <li className='icon_btn'>
                        <MdOutlineForwardToInbox />
                    </li>
                    <li onClick={() => setOpen(!open)} className='icon_btn md:hidden md:relative'>
                        <BsThreeDotsVertical />
                        {
                            open && <HeaderProfileMenu top="top-14" right="right-2" />
                        }
                    </li>
                </ul>

                <HeaderProfile />

            </div>
        </header>
    );
};

export default Header;