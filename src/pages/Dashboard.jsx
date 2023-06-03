import Chart from "../components/Chart/Chart";
import Card from "../components/Card/Card";
import CustomareGraph from "../components/Graph/CustomareGraph";
import InfoCard from "../components/InfoCard/InfoCard";
import CustomareTable from "../components/Table/CustomareTable";

const Dashboard = () => {
    return (
        <div className="w-full flex flex-col gap-5">
            <div className="w-full flex flex-wrap gap-5">
                <div className="flex-shrink flex-grow basis-[750px]">
                    <div className="flex gap-6 flex-wrap justify-between">
                        <Card />
                        <Card />
                    </div>
                    <CustomareGraph />
                </div>
                <div className="flex-shrink flex-grow basis-[250px] ">
                    <Chart />
                    <InfoCard />
                </div>
            </div>
            <CustomareTable />
        </div>
    );
};

export default Dashboard;