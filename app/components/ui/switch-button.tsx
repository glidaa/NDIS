import { cn } from "app/lib/utils";
import React, { useState } from "react";
import { Button } from "./button";

export type SwitchButtonProps = {
  onChange: (value: boolean) => void;
  options: Array<
    string
  >;
};

export const SwitchButton = ({ options }: SwitchButtonProps) => {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <div className="w-fit border border-brand-text rounded-l rounded-r overflow-hidden">
      {options.map((item, index) => (
        <Button
          className={cn(
            "border-none rounded-none",
            index === activeButton
              ? "bg-brand-dark"
              : "bg-white text-brand-dark",
          )}
          onClick={() => setActiveButton(index)}
          label={item}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};
