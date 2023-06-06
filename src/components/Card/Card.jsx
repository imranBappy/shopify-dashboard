import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

const Card = ({ data, title, dataKey, nums}) => {

    return (
        <div className="theme_component pt-2 basis-[250px] flex-grow">
            <p className=" text-black px-4 py-2 font-serif dark:text-lite3 text-sm">{ title}</p>
            <p className=" px-4 pb-4 font-semibold text-black dark:text-dark4 text-2xl">{nums}</p>
            <div className=" w-full h-20 ">
                <ResponsiveContainer width="95%" height="100%">
                    <BarChart data={data}>
                        <Bar dataKey={dataKey} fill="#8884d8" />
                        <Tooltip />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Card;