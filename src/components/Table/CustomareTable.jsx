import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import orders from '../../data/orders.json'
import { userGetCustomare } from '../../features/customare/customareSlice';
import Status from '../Status/Status';
import { userCustomareFilter } from '../../features/filter/filterSlice';
import { costomarePagination } from '../../features/pagination/paginationSlice';
const CustomareTable = () => {
    const { customares: data } = useSelector((state) => state.customares)
    const { filter } = useSelector((state) => state.filter)
    const { customares, page } = useSelector((state) => state.pagination)

    const [status, setStatus] = useState("All");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userGetCustomare({ customares: orders }))
        dispatch(userCustomareFilter({ status, customares: data }))

    }, [data, dispatch, page, status])
    useEffect(() => {
        dispatch(costomarePagination({ page: page, customares: filter }))
    }, [filter, dispatch, page])
    const handleStatus = (e) => {
        setStatus(e.target.value)
        dispatch(userCustomareFilter({ status: e.target.value, customares: data }))
    }
    const handlePage = (p) => {
        if (p > -1)
            dispatch(costomarePagination({ page: p, customares: filter }))
    }

    return (
        <div className='theme_component mt-5 pt-5 w-full  '>
            <div className=" flex  flex-wrap gap-4 justify-between mx-5 py-4 ">
                <div>
                    <select value={status} onChange={handleStatus} name="" id="" className="bg-lite2 font-semibold text-black   outline-none px-4 py-2 dark:bg-dark1 dark:text-dark4 rounded " >
                        <option value="All">All</option>
                        <option value="Pending">Pending</option>
                        <option value="Complated">Complated</option>
                        <option value="Canceled">Canceled</option>
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
                    <thead>
                        <tr className=" text-left bg-primary2 ">
                            <th className=" pl-6 py-4 min-w-[55px]   ">#</th>
                            <th className=" py-5  min-w-[75px]">ID</th>
                            <th className=" py-5  min-w-[250px] ">Customare</th>
                            <th className=" py-5 min-w-[120px]  ">Date</th>
                            <th className=" py-5  min-w-[55px] ">Items</th>
                            <th className=" py-5  min-w-[70px] ">Price</th>
                            <th className=" py-5   min-w-[100px]">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customares?.map((cus) => {
                                let key = cus._id.slice(cus._id.length - 6, cus._id.length - 1).toUpperCase();
                                return <tr key={key} className=" hover:bg-lite5" style={{ borderBottom: "1px solid rgb(22, 119, 255, 0.2)", borderStyle: " dotted" }} >
                                    <td className="pl-6 py-4"> <input type="checkbox" className="" name="" id="" /> </td>
                                    <td>#{key}</td>
                                    <td>
                                        <div className=' flex flex-col '>
                                            <div className=' font-semibold'>
                                                {cus.customer.name}
                                            </div>
                                            <div className=' font-thin'>
                                                {cus.customer.email}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className=' flex flex-col'>
                                            <div className=' font-semibold'>
                                                {cus.date}
                                            </div>
                                            <div className=' font-thin'>
                                                {cus.time}
                                            </div>
                                        </div>
                                    </td>
                                    <td>{cus.items}</td>
                                    <td>${cus.price}</td>
                                    <td>
                                        <div className=' flex gap-3 items-center'>
                                            <div>
                                                <Status status={cus.status} />
                                            </div>
                                            <div>
                                                {cus.status}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className='flex justify-between dark:bg-dark2  mx-5 py-5 dark:text-dark4'>
                <div>
                    Page : {page}
                </div>
                <div>
                    <div className='flex  items-center text-xl gap-5'>
                        <span onClick={() => handlePage(page - 1)} className='icon_btn'>
                            <IoIosArrowBack />
                        </span>
                        <span onClick={() => handlePage(page + 1)} className='icon_btn'>
                            <IoIosArrowForward />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomareTable;