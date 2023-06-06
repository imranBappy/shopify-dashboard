import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
const data01 = [
    { name: 'Complate', value: 340 },
    { name: 'Canceled', value: 200 },
    { name: 'Pading', value: 250 },
    { name: 'Return', value: 200 },
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