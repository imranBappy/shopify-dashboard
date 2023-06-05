import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];


const Chart = () => {

    return (
        <div className="theme_component pt-5 w-full h-80 flex items-center justify-around">
            <ResponsiveContainer width="80%" height="100%">
                <PieChart width={200} height={200}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div >
    );
};

export default Chart;