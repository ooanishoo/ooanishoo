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
    value: 60,
  },
  {
    color: '#deebf7',
    name: 'Lifting',
    value: 40,
  },
  {
    color: '#3182bd',
    name: 'Guitar',
    value: 50,
  },
  {
    color: '#9ecae1',
    name: 'Keyboard',
    value: 60,
  },
  {
    color: '#deebf7',
    name: 'Renovation/DIY',
    value: 30,
  },
]

export const BarGraph = () => {
  return (
    <ResponsiveContainer
      width="99%"
      height={600}
      className="mt-12 dark:text-white"
    >
      <BarChart
        data={data}
        defaultShowTooltip={true}
        title="How do I fill my time?"
        desc="A bart chart showcasing how Anish spends his time."
        margin={{
          top: 0,
          right: -21,
          bottom: 0,
          left: -21,
        }}
        role="graphics-document"
      >
        <CartesianGrid strokeDasharray="5 5" />
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
