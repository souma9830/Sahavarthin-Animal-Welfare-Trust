import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <div className="bg-primary py-10 px-4 lg:px-8">
      <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading text-xl text-primary-foreground">Stay Updated</h3>
          <p className="text-sm text-primary-foreground/80">[Newsletter signup description placeholder]</p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <Input
            type="email"
            placeholder="Your email address"
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 min-w-[250px]"
          />
          <Button variant="secondary">Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
