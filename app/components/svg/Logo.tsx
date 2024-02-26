import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 200, height = 200 }) => {
  return (
    <Image
      className={`w-${width} h-${height}`}
      src="/logo.png"
      alt="Logo"
      width={width}
      height={height}
    />
  );
};

export default Logo;
