import SectionBlock from "./SectionBlock";

interface StatItem {
  label: string;
  value: string;
}

interface StatsCounterSectionProps {
  id: string;
  title: string;
  stats?: StatItem[];
  variant?: "default" | "muted" | "primary" | "accent";
}

const defaultStats: StatItem[] = [
  { label: "[Metric 1]", value: "[###]" },
  { label: "[Metric 2]", value: "[###]" },
  { label: "[Metric 3]", value: "[###]" },
  { label: "[Metric 4]", value: "[###]" },
];

const StatsCounterSection = ({ id, title, stats = defaultStats, variant = "primary" }: StatsCounterSectionProps) => {
  return (
    <SectionBlock id={id} title={title} variant={variant}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="p-4">
            <div className="font-heading text-3xl md:text-4xl mb-1">{stat.value}</div>
            <div className="text-sm opacity-80">{stat.label}</div>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
};

export default StatsCounterSection;
