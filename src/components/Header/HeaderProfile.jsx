import { useState } from "react";
import HeaderProfileMenu from "./HeaderProfileMenu";

const HeaderProfile = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative hidden md:block ">
            <div onClick={() => setOpen(!open)} className=" hover:dark:bg-lite4 dark:bg-dark2 dark:text-dark4 bg-lite2 hover:bg-lite3 py-1 px-2 cursor-pointer rounded flex flex-wrap items-center gap-3 mr-6">
                <img className="  w-7" src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="profile" />
                <span className=' font-semibold'>Imran Hossen</span>
            </div>
            {
                open && <HeaderProfileMenu top="top-12" right="right-6" />
            }
        </div>
    );
};

export default HeaderProfile;