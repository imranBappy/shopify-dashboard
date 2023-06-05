import NavLink from '../NavLink/NavLink'
import logo from '../../assets/react.svg'
import { AiOutlineDashboard, AiFillSetting } from 'react-icons/ai'
import { MdOutlineManageAccounts, MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { HiTemplate } from 'react-icons/hi'
import { FiUsers } from 'react-icons/fi'



const Sidebar = ({ sidebar }) => {
    return (
        <div className={` z-50 fixed dark:border-r-[0.1px] dark:border-lite4 dark:shadow-lite1  dark:bg-dark2 ease-in duration-150 shadow  ${sidebar ? ' w-48 md:w-60' : 'w-16'} min-h-screen `}>
            <div className={`mb-8 flex flex-col px-${sidebar ? '4' : '2'} mt-2 gap-2 ${sidebar ? ' items-center' : ' items-start'}`}>
                <img className={sidebar ? 'w-14' : 'w-10'} src={logo} alt="" />
                {
                    sidebar && <span className='dark:text-dark4 font-semibold text-lg'>Shopify</span>
                }

            </div>
            <div style={{ minHeight: "85vh" }} className={`w-full flex flex-col justify-between`}>
                <ul className='w-full flex flex-col item-center'>
                    <NavLink to="/" text="Dashboard" sidebar={sidebar} >
                        <AiOutlineDashboard className={`  ${sidebar ? 'text-xl' : 'text-2xl'}`} />
                    </NavLink>
                    <NavLink to="/orders" text="Order" sidebar={sidebar} >
                        <HiTemplate className={`  ${sidebar ? 'text-xl' : 'text-2xl'}`} />
                    </NavLink>

                    <NavLink to="/products" text="Product" sidebar={sidebar} >
                        <MdOutlineProductionQuantityLimits className={`  ${sidebar ? 'text-xl' : 'text-2xl'}`} />
                    </NavLink>

                    <NavLink to="/customares" text="Customare" sidebar={sidebar} >
                        <FiUsers className={`  ${sidebar ? 'text-xl' : 'text-2xl'}`} />
                    </NavLink>
                </ul>

                <ul className={`w-full`}>
                    <li >
                        <NavLink to="/profile" text="Profile" sidebar={sidebar} >
                            <MdOutlineManageAccounts className={`  ${sidebar ? 'text-xl' : 'text-2xl'}`} />
                        </NavLink>
                        <NavLink to="/setting" text="Setting" sidebar={sidebar} >
                            <AiFillSetting className={`  ${sidebar ? 'text-xl' : 'text-2xl'}`} />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;