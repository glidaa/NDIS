import React from "react";
import { Logo } from "../ui/logo";
import { PhoneIcon } from "../icons/phone-icon";
import { LanguageIcon } from "../icons/language-icon";
import { ProfileIcon } from "../icons/profile-icon";
import { BottomArrowIcon } from "../icons/bottom-arrow-icon";
import { Input } from "../ui/input";
import { Navbar } from "./navbar";
import { cn } from "../../lib/utils";

export const MastHead = ({ className }: { className?: string }) => {
  return (
    <div className="w-full relative h-[359px] md:h-[246px]">
      <div className={cn("absolute top-0 left-0 w-full", className)}>
        <div className="w-full flex justify-center items-center bg-brand-dark">
          <div className="max-w-6xl w-full my-2 mx-4">
            <span className="text-white text-sm font-heading leading-5">
              Australia Government Website
            </span>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex justify-between">
          <Logo className="w-1/2 h-auto md:w-[436px] md:h-[104px] mt-2 md:mt-[30px]" />
          <div className="hidden lg:flex absolute z-50 top-0 right-0 items-center gap-[39px] mt-[55px] mr-[58px] h-[42px]">
            <span className="flex items-center gap-[11px] font-heading text-brand-dark font-bold text-xl">
              <PhoneIcon className="inline-flex" /> 1800 035 544
            </span>

            <span className="flex items-center gap-[11px] font-heading text-brand-text text-xl">
              <LanguageIcon className="inline-flex" /> Languages
            </span>
            <span className="flex items-center gap-[11px] font-heading text-brand-text text-xl">
              <ProfileIcon className="inline-flex" /> Portals{" "}
              <BottomArrowIcon className="inline-flex" />
            </span>
            <Input
              className="h-[42px] w-[131px] py-0 border-input"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="hidden md:flex max-w-6xl mt-4 mx-auto justify-between">
          <Navbar />
        </div>
      </div>
    </div>
  );
};
