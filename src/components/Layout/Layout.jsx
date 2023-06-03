import styles from '../../App.module.css'
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect, useState } from 'react';
const Layout = (props) => {
    const { children } = props
    const [sidebar, setSidebar] = useState(true)
    // const [sidebar, setSidebar] = useState(true)
    const [width, setWidth] = useState(0);

    console.log(sidebar, width);
    const showSidebar = () => {
        if (sidebar) setWidth(window.innerWidth - 83);
        else setWidth(window.innerWidth - 240);
        setSidebar(!sidebar)
    }
    const [blur, setBlur] = useState(false);
    useEffect(() => {
        setWidth(window.innerWidth - 240);
        const handleScroll = () => {
            let windowHeight = window.scrollY
            if (windowHeight > 16) setBlur(true)
            else setBlur(false)
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className={`${styles.coninter} dark:bg-dark1 `}>
            <div className={styles.dashboard_wrapper}>
                <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
                <div className={`overflow-x-hidden absolute right-0 ease-in duration-150`} style={{ width: `${width}px` }}>
                    <div className='  w-full relative'>
                        <Header width={width} blur={blur} sidebar={sidebar} showSidebar={showSidebar} />
                        {/* theare will many content */}
                        <div className="mt-14 px-6 py-5 bg-lite2 w-full h-full dark:bg-dark1 ">
                            {
                                children
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;