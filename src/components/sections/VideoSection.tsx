import SectionBlock from "./SectionBlock";

interface VideoSectionProps {
  id: string;
  title: string;
  variant?: "default" | "muted" | "primary" | "accent";
}

const VideoSection = ({ id, title, variant = "muted" }: VideoSectionProps) => {
  return (
    <SectionBlock id={id} title={title} variant={variant}>
      <div className="aspect-video bg-foreground/5 rounded-lg flex items-center justify-center text-muted-foreground border border-border">
        <span className="text-sm">[Video Embed Placeholder]</span>
      </div>
    </SectionBlock>
  );
};

export default VideoSection;
