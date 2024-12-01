import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
} satisfies ChartConfig;

const SalesChart = () => {
  const monthlyChart = [
    { month: "January", value: 100000 },
    { month: "February", value: 50000 },
    { month: "March", value: 65000 },
    { month: "April", value: 50000 },
    { month: "May", value: 150000 },
    { month: "June", value: 165000 },
    { month: "July", value: 50000 },
    { month: "August", value: 45000 },
    { month: "September", value: 150000 },
    { month: "October", value: 100000 },
    { month: "November", value: 250000 },
    { month: "December", value: 65000 },
  ];

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full pt-8">
      <BarChart accessibilityLayer data={monthlyChart}>
        <CartesianGrid vertical={false} className="stroke-black" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Bar dataKey="value" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export default SalesChart;
