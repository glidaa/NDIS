import { cn } from "app/lib/utils";

export type SeparatorProps = {
  text?: string;
  className?: string;
};

export const Separator = ({ text, className }: SeparatorProps) => {
  return (
    <div className={cn("relative flex  items-center", className)}>
      <div
        className={cn("w-[95%] h-1 bg-brand-accent", !text && "h-[2px] w-full")}
      >
      </div>
      {text && (
        <div className="absolute w-48 md:w-56 h-[68px] right-0 top-[-34px] bg-brand-accent rounded-tl-[30px] rounded-br-[30px] flex justify-center items-center px-3">
          <span className="font-bold font-heading text-white w-full text-center">
            {text}
          </span>
        </div>
      )}
    </div>
  );
};
