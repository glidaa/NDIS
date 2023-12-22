import * as React from "react";
import { SVGProps } from "react";
export const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#000"
        d="M11 0C4.924 0 0 4.924 0 11s4.924 11 11 11 11-4.924 11-11S17.076 0 11 0Zm0 20.625a9.563 9.563 0 0 1-5.466-1.712c.177-2.117 1.934-3.788 4.091-3.788h2.75c2.16 0 3.916 1.673 4.091 3.788A9.58 9.58 0 0 1 11 20.625Zm6.69-2.72c-.606-2.38-2.75-4.155-5.315-4.155h-2.75c-2.567 0-4.71 1.774-5.315 4.156-1.806-1.789-2.935-4.2-2.935-6.906 0-5.307 4.318-9.625 9.625-9.625S20.625 5.693 20.625 11c0 2.707-1.13 5.117-2.935 6.905ZM11 5.5a3.437 3.437 0 0 0-3.438 3.437 3.437 3.437 0 1 0 6.875 0C14.438 7.038 12.9 5.5 11 5.5Zm0 5.5a2.063 2.063 0 1 1 .001-4.126A2.063 2.063 0 0 1 11 11Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
);
