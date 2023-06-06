import { NavLink as _NavLink } from 'react-router-dom/dist';

const NavLink = ({ sidebar, text, to, children }) => {
    let classname = ` w-full hover:bg-primary2 hover:dark:bg-lite5 font-serif dark:text-dark4 px-4 flex flex-wrap items-center  py-4 gap-4 ${sidebar ? '' : 'justify-around'}`;
    return (

        <_NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? classname + ' bg-primary2' : classname
            }
        >
            {
                children
            }
            <span className={` transition-all ease-in duration-150 text-lg ${sidebar ? ' block' : '  hidden'}`}>{text}</span>
        </_NavLink>
    );
};

export default NavLink;