
const InfoCard = () => {
    return (
        <div className="theme_component px-4  mt-5 py-5 w-full">

            <p className=" text-black py-1 font-serif dark:text-lite3 text-sm">TOTAL SALES BREAKDOWN</p>

            <div className=" flex justify-between mt-2">
                <div className="flex items-center gap-2">
                    <span className=" inline-block w-3 h-3 rounded-full bg-blue-700"></span>
                    <span className=" text-black  font-serif dark:text-lite3 ">Orders</span></div>
                <div >
                    <span className="text-black font-serif dark:text-lite3 ">
                        $ 2121,21
                    </span>
                </div>
            </div>
            <div className=" flex justify-between ">
                <div className="flex items-center gap-2">
                    <span className=" inline-block w-3 h-3 rounded-full bg-red-700"></span>
                    <span className=" text-black  font-serif dark:text-lite3 ">Returns</span></div>
                <div >
                    <span className="text-black  font-serif dark:text-lite3 ">
                        $ 2121,21
                    </span>
                </div>
            </div>


            <div className=" flex justify-between  mt-4">
                <div className="">
                    <span className=" text-black   font-serif dark:text-lite3 ">Total Sells</span></div>
                <div >
                    <span className="text-black   font-serif dark:text-lite3 ">
                        $ 2121,21
                    </span>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;