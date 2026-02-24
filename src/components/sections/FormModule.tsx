import SectionBlock from "./SectionBlock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormModuleProps {
  id: string;
  title: string;
  fields?: string[];
  hasFileUpload?: boolean;
  variant?: "default" | "muted" | "primary" | "accent";
}

const FormModule = ({
  id,
  title,
  fields = ["Name", "Email", "Message"],
  hasFileUpload = false,
  variant = "muted",
}: FormModuleProps) => {
  return (
    <SectionBlock id={id} title={title} variant={variant}>
      <div className="max-w-xl mx-auto space-y-4">
        {fields.map((field) => (
          <div key={field}>
            <label className="text-sm font-medium text-foreground mb-1 block">{field}</label>
            {field.toLowerCase() === "message" ? (
              <Textarea placeholder={`[${field}]`} className="bg-card" />
            ) : (
              <Input placeholder={`[${field}]`} className="bg-card" />
            )}
          </div>
        ))}
        {hasFileUpload && (
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Attach Document</label>
            <div className="section-placeholder py-6">
              <span className="text-xs">[File Upload Component]</span>
            </div>
          </div>
        )}
        <Button className="w-full">Submit</Button>
      </div>
    </SectionBlock>
  );
};

export default FormModule;
