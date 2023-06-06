import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomareGraph = ({ data }) => {
    return (
        <div className='theme_component mt-5 pt-5 w-full h-80 '>
            <ResponsiveContainer width="95%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="complated" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="canceled" stroke="#EF5F58 " />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomareGraph;