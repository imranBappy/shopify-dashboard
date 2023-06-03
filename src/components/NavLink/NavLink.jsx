import { AiOutlineDashboard } from 'react-icons/ai'
import { NavLink as _NavLink } from 'react-router-dom/dist';

const NavLink = ({ sidebar }) => {
    return (
        <li className=' w-full hover:bg-primary2 hover:dark:bg-lite5 '>
            <_NavLink className={` font-serif dark:text-dark4 px-4 flex flex-wrap items-center py-2 gap-2 ${sidebar ? '' : 'justify-around'}`}>
                <AiOutlineDashboard className={`  ${sidebar ? 'text-xl' : 'text-2xl'}`} />
                {
                    sidebar && <span className=' text-base'>Dashboard</span>
                }
            </_NavLink>
        </li>
    );
};

export default NavLink;