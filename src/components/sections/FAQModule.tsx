import SectionBlock from "./SectionBlock";

interface FAQModuleProps {
  id: string;
  title: string;
  count?: number;
  variant?: "default" | "muted" | "primary" | "accent";
}

const FAQModule = ({ id, title, count = 5, variant = "default" }: FAQModuleProps) => {
  return (
    <SectionBlock id={id} title={title} variant={variant}>
      <div className="max-w-3xl mx-auto space-y-3">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="border border-border rounded-lg p-4 bg-card">
            <div className="h-4 bg-muted rounded w-3/4 mb-2" />
            <div className="h-3 bg-muted rounded w-full" />
          </div>
        ))}
      </div>
    </SectionBlock>
  );
};

export default FAQModule;
