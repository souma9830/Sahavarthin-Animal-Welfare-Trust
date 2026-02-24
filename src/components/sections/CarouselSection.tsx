import SectionBlock from "./SectionBlock";

interface CarouselSectionProps {
  id: string;
  title: string;
  variant?: "default" | "muted" | "primary" | "accent";
}

const CarouselSection = ({ id, title, variant = "default" }: CarouselSectionProps) => {
  return (
    <SectionBlock id={id} title={title} variant={variant}>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="min-w-[280px] h-48 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm shrink-0">
            [Slide {i + 1}]
          </div>
        ))}
      </div>
    </SectionBlock>
  );
};

export default CarouselSection;
