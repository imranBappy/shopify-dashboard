import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import orders from '../../data/orders.json'
import { userGetCustomare, useCustomareFilter } from '../../features/customare/customareSlice';
const CustomareTable = () => {
    const { customares } = useSelector((state) => state.customares)
    const [status, setStatus] = useState("All");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userGetCustomare({ customares: orders }))
    }, [dispatch])

    const handleStatus = (e) => {
        setStatus(e.target.value)
        if (e.target.value !== 'All') {
            dispatch(useCustomareFilter(status))
        } else {
            dispatch(userGetCustomare({ customares: orders }))
        }
    }
    return (
        <div className='theme_component mt-5 pt-5 w-full  '>
            <div className=" flex  flex-wrap gap-4 justify-between mx-5 py-4 ">
                <div>
                    <select value={status} onChange={handleStatus} name="" id="" className=" outline-none px-4 py-2 dark:bg-dark1 text-dark4 rounded " >
                        <option value="All">All</option>
                        <option value="Pending">Pending</option>
                        <option value="Complated">Complated</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </div>
                <div >
                    <div className=' px-4 gap-2  flex items-center dark:bg-dark1 dark:text-dark4'>
                        <BiSearch />
                        <input className=' outline-none py-2 dark:bg-dark1   dark:text-dark4' placeholder="Enter the text..." type="text" />
                    </div>
                </div>
            </div>
            <div className=' xl:overflow-hidden overflow-x-scroll' >
                <table className=" w-full  text-black dark:text-dark4">
                    <tr className=" text-left bg-primary2 ">
                        <th className=" pl-6 py-4 min-w-[55px]   ">#</th>
                        <th className=" py-4  min-w-[75px]">ID</th>
                        <th className=" py-4  min-w-[250px] ">Customare</th>
                        <th className=" py-4 min-w-[120px]  ">Date</th>
                        <th className=" py-4  min-w-[55px] ">Items</th>
                        <th className=" py-4  min-w-[70px] ">Price</th>
                        <th className=" py-4   min-w-[100px]">Status</th>
                    </tr>
                    {
                        customares.slice(0, 10).map((cus) => {
                            let key = cus._id.slice(cus._id.length - 6, cus._id.length - 1).toUpperCase();
                            return <tr key={key} className=" hover:bg-lite5" style={{ borderBottom: "1px solid rgb(22, 119, 255, 0.2)", borderStyle: " dotted" }} >
                                <td className="pl-6 py-4"> <input type="checkbox" className="" name="" id="" /> </td>
                                <td>#{key}</td>
                                <td>
                                    <div className=' flex flex-col gap-1'>
                                        <div>
                                            {cus.customer.name}
                                        </div>
                                        <div>
                                            {cus.customer.email}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className=' flex flex-col gap-1'>
                                        <div>
                                            {cus.date}
                                        </div>
                                        <div>
                                            {cus.time}
                                        </div>
                                    </div>
                                </td>
                                <td>{cus.items}</td>
                                <td>${cus.price}</td>
                                <td>{cus.status}</td>
                            </tr>
                        }
                        )
                    }

                </table>
            </div>

            <div className='flex justify-between dark:bg-dark2  mx-5 py-5 dark:text-dark4'>
                <div>
                    Page : 1
                </div>
                <div>
                    <div className='flex  items-center text-xl gap-5'>
                        <span className='icon_btn'>
                            <IoIosArrowBack />
                        </span>
                        <span className='icon_btn'><IoIosArrowForward /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomareTable;