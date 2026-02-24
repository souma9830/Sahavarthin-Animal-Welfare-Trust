import SectionBlock from "./SectionBlock";

interface HighlightSectionProps {
  id: string;
  title: string;
  variant?: "default" | "muted" | "primary" | "accent";
}

const HighlightSection = ({ id, title, variant = "accent" }: HighlightSectionProps) => {
  return (
    <SectionBlock id={id} title={title} variant={variant}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-3">
          <div className="h-4 bg-muted rounded w-full" />
          <div className="h-4 bg-muted rounded w-5/6" />
          <div className="h-4 bg-muted rounded w-4/6" />
          <div className="h-4 bg-muted rounded w-3/4" />
        </div>
        <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">
          [Image / Illustration]
        </div>
      </div>
    </SectionBlock>
  );
};

export default HighlightSection;
