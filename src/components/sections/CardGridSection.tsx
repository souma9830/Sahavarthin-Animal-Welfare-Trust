import SectionBlock from "./SectionBlock";

interface CardGridSectionProps {
  id: string;
  title: string;
  count?: number;
  variant?: "default" | "muted" | "primary" | "accent";
}

const CardGridSection = ({ id, title, count = 3, variant = "default" }: CardGridSectionProps) => {
  return (
    <SectionBlock id={id} title={title} variant={variant}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="border border-border rounded-lg p-6 bg-card">
            <div className="h-32 bg-muted rounded-md mb-4 flex items-center justify-center text-muted-foreground text-xs">
              [Card Image {i + 1}]
            </div>
            <div className="h-4 bg-muted rounded w-3/4 mb-2" />
            <div className="h-3 bg-muted rounded w-full mb-1" />
            <div className="h-3 bg-muted rounded w-2/3" />
          </div>
        ))}
      </div>
    </SectionBlock>
  );
};

export default CardGridSection;
