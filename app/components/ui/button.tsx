import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-md font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:opacity-90 border-2 border-transparent",
  {
    variants: {
      variant: {
        default: "bg-brand-dark text-primary-foreground",
        dark: "bg-brand-dark text-primary-foreground",
        "dark-outline":
          "bg-transparent text-brand-dark border-brand-dark hover:bg-brand-dark hover:text-primary-foreground",
        light: "bg-brand-light text-primary-foreground",
        "light-outline":
          "bg-transparent text-brand-light border-brand-light hover:bg-brand-light hover:text-primary-foreground",
        white: "bg-white text-brand-text",
        green: "bg-brand-accent text-primary-foreground",
        "green-outline":
          "bg-transparent text-brand-access border-brand-success hover:bg-brand-success hover:text-primary-foreground",
        transparent:
          "bg-transparent text-brand-dark underline decoration-2 decoration-brand-dark",
      },
      size: {
        default: "h-12 px-6 py-3 gap-2",
        sm: "h-9 px-3 text-sm",
        lg: "h-11 px-8 gap-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  label: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, label, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {label}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
