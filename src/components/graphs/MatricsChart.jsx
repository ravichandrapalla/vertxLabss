import { LineChart } from "lucide-react";
import {
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MetricsChart = ({
  data,
  comparisonData = null,
  primaryColor = "#fff",
  secondaryColor = "#9333EA",
}) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="date" stroke="#666" />
        <YAxis stroke="#666" />
        <Tooltip
          contentStyle={{ backgroundColor: "#222", borderColor: "#444" }}
          itemStyle={{ color: "#fff" }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke={primaryColor}
          dot={false}
          strokeWidth={2}
          name="Primary Metric"
        />
        {comparisonData && (
          <Line
            data={comparisonData}
            type="monotone"
            dataKey="value"
            stroke={secondaryColor}
            dot={false}
            strokeWidth={2}
            name="Comparison Metric"
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};
export default MetricsChart;
