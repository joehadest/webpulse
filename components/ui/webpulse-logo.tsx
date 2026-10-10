import Image from "next/image";
import { cn } from "@/lib/utils";

interface WebPulseLogoProps {
  className?: string;
  size?: number;
  showWordmark?: boolean;
}

export function WebPulseLogo({
  className,
  size = 48,
  showWordmark = false,
}: WebPulseLogoProps) {
  const width = showWordmark ? Math.round(size * 3.2) : size;
  const height = showWordmark ? Math.round((width * 192) / 1144) : size;

  return (
    <Image
      src={showWordmark ? "/logo/webpulse-wordmark.svg" : "/logo/webpulse-icon.svg"}
      alt="WebPulse"
      width={width}
      height={height}
      className={cn("block h-auto", className)}
      unoptimized
    />
  );
}
