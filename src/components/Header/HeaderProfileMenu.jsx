import { Link } from "react-router-dom";
import { AiFillEdit, AiOutlineLogout } from 'react-icons/ai'
import { MdManageAccounts } from 'react-icons/md'
const HeaderProfileMenu = ({top, right}) => {
    return (
        <div className={` z-50 ${top} ${right} shadow-sm shadow-dark3 absolute  dark:bg-dark2 dark:text-dark4 bg-lite2 hover:bg-lite3 pt-3  w-56 rounded`}>
            <div className=" px-4 flex items-center gap-4">
                <img className="w-10" src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="profile" />
                <span className=' font-semibold text-lg'>Imran Hossen</span>
            </div>
            <ul className="flex  flex-col mt-5">
                <Link className="px-5 py-2 hover:bg-primary2 hover:dark:bg-lite5 dark:text-dark4 flex flex-wrap items-center  gap-5">
                    <AiFillEdit />
                    <span>Edit Profile</span>
                </Link>
                <Link className="px-5 py-2 hover:bg-primary2 hover:dark:bg-lite5 dark:text-dark4 flex flex-wrap items-center  gap-5">
                    <MdManageAccounts />
                    <span>View Profile</span>
                </Link>
                <li className="px-5 py-2 hover:bg-primary2 hover:dark:bg-lite5 dark:text-dark4 flex flex-wrap items-center  gap-5">
                    <AiOutlineLogout />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
    );
};

export default HeaderProfileMenu;