import * as React from "react";
import { SVGProps } from "react";

export const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={17}
    fill="none"
    {...props}
  >
    <path d="M0 17H14V15H0V17ZM0 7H4V13H10V7H14L7 0L0 7Z" fill={props?.color || '#FFFFFF'} opacity={props?.opacity || null}/>
  </svg>  
);
''