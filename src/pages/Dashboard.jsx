import Chart from "../components/Chart/Chart";
import Card from "../components/Card/Card";
import CustomareGraph from "../components/Graph/CustomareGraph";
import InfoCard from "../components/InfoCard/InfoCard";
import CustomareTable from "../components/Table/CustomareTable";
import users from "../data/users";
import ordersData from "../data/orderGraph";
import totalOrder from "../data/totalOrder";

const Dashboard = () => {

    return (
        <div className="w-full" >
            <div className="w-full flex flex-grow flex-wrap gap-5 ">
                <div className=" basis-[400px] flex-grow " >
                    <div className=" flex gap-6 flex-wrap md:flex-nowrap justify-between">
                        <Card dataKey="Users" data={users} title={'Total Users'} nums={93213} />
                        <Card dataKey="Orders" data={totalOrder} title={'Total Orders'} nums={19213} />
                    </div>
                    <CustomareGraph data={ordersData} />
                </div >
                <div className="flex-shrink flex-grow  basis-[250px] ">
                    <Chart />
                    <InfoCard />
                </div>
            </div >
            <CustomareTable />
        </div >
    );
};

export default Dashboard;