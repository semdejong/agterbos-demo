import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  preload?: boolean;
  /** Niet groter tonen dan de oorspronkelijke breedte. */
  native?: boolean;
};

export function Photo({
  src,
  alt,
  width,
  height,
  sizes,
  className = "",
  preload = false,
  native = false,
}: Props) {
  if (native) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        sizes={sizes ?? `${width}px`}
        className={`photo-native ${className}`.trim()}
        style={{ maxWidth: `min(100%, ${width}px)` }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "(max-width: 800px) 100vw, 50vw"}
      preload={preload || undefined}
      className={`object-cover ${className}`.trim()}
    />
  );
}
