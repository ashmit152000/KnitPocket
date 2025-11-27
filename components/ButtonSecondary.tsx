import React, { JSX } from "react";

interface ButtonSecondaryInterface {
    text: string, 
    isSVG?: boolean,
    SVG?: React.ReactNode,

}
export default function ButtonSecondary({text, isSVG, SVG}: ButtonSecondaryInterface): JSX.Element {
  return (
    <button className="btn btn-glow btn-secondary px-8 py-4 rounded-full text-white font-semibold text-lg transition-all flex items-center justify-center gap-2 group relative z-10">
      {isSVG && SVG}
      {text}
    </button>
  );
}
