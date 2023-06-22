import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
} from 'recharts'

interface BarGraph {
  color: string
  name: string
  value: number
}

const data: BarGraph[] = [
  {
    color: '#3B82F6',
    name: 'Coding',
    value: 75,
  },
  {
    color: '#9ecae1',
    name: 'Mentoring',
    value: 50,
  },
  {
    color: '#deebf7',
    name: 'Lifting',
    value: 30,
  },
  {
    color: '#3182bd',
    name: 'Guitar',
    value: 40,
  },
  {
    color: '#9ecae1',
    name: 'Keyboard',
    value: 60,
  },
  {
    color: '#deebf7',
    name: 'Renovations/DIY',
    value: 50,
  },
]

export const BarGraph = () => {
  return (
    <ResponsiveContainer
      width="99%"
      height={400}
      className="mt-6 dark:text-white"
    >
      <BarChart
        data={data}
        defaultShowTooltip={true}
        title="How do I fill my time?"
        desc="A bart chart showcasing how Anish spends his time."
        margin={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
        role="graphics-document"
      >
        <CartesianGrid strokeDasharray="5 5" className="hidden sm:block" />
        <Bar
          dataKey="value"
          animationEasing="ease-in-out"
          animationBegin={100}
          animationDuration={1600}
          type="monotone"
        >
          <LabelList
            dataKey="name"
            position="middle"
            angle={270}
            fill="black"
            fontSize={14}
          />
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} fillOpacity={'0.90'} />
          ))}
        </Bar>
        <XAxis dataKey="name" tickMargin={8} className="hidden lg:block" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChart
