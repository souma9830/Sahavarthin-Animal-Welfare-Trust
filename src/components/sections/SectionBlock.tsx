interface SectionBlockProps {
  id: string;
  title: string;
  description?: string;
  variant?: "default" | "muted" | "primary" | "accent";
  children?: React.ReactNode;
}

const variantStyles = {
  default: "bg-background",
  muted: "bg-muted",
  primary: "bg-primary text-primary-foreground",
  accent: "bg-secondary",
};

const SectionBlock = ({ id, title, description, variant = "default", children }: SectionBlockProps) => {
  return (
    <section id={id} className={`section-block ${variantStyles[variant]}`}>
      <div className="container-page">
        <div className="section-label">{id.replace(/-/g, " ")}</div>
        <h2 className="font-heading text-2xl md:text-3xl mb-2">{title}</h2>
        {description && <p className="text-muted-foreground text-sm mb-6">{description}</p>}
        {children || (
          <div className="section-placeholder">
            <span className="text-sm">[{title} — Content Module Placeholder]</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionBlock;
