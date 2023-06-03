import styles from '../../App.module.css'
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from 'react';
const Layout = (props) => {
    const { children } = props
    const [sidebar, setSidebar] = useState(true)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div className={styles.coninter}>
            <div className={styles.dashboard_wrapper}>
                <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
                <div className="dashboard__content w-full">
                    <Header sidebar={sidebar} showSidebar={showSidebar} />
                    {/* theare will many content */}
                    <div className=" px-6 py-5 bg-lite2 w-full h-full dark:bg-dark1">
                        {
                            children
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;