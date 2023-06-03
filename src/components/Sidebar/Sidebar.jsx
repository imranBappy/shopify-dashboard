import NavLink from '../NavLink/NavLink'
import logo from '../../assets/react.svg'
const Sidebar = ({ sidebar }) => {
    return (
        <div className={` z-50 fixed dark:border-r-[0.1px] dark:border-lite4 dark:shadow-lite1  dark:bg-dark2 ease-in duration-150 shadow  ${sidebar ? 'w-60' : 'w-16'} min-h-screen `}>
            <div className={`mb-8 flex flex-col px-${sidebar ? '4' : '2'} mt-2 gap-2 ${sidebar ? ' items-center' : ' items-start'}`}>
                <img className={sidebar ? 'w-14' : 'w-10'} src={logo} alt="" />
                {
                    sidebar && <span className='dark:text-dark4 font-semibold text-lg'>Shopify</span>
                }

            </div>
            <div style={{ minHeight: "75vh" }} className={`w-full flex flex-col justify-between`}>
                <ul className='w-full flex flex-col item-center'>
                    <NavLink sidebar={sidebar} />
                    <NavLink sidebar={sidebar} />
                    <NavLink sidebar={sidebar} />
                </ul>

                <ul className={`w-full`}>
                    <li className='hover:bg-primary2'>
                        <NavLink sidebar={sidebar} />
                        <NavLink sidebar={sidebar} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;