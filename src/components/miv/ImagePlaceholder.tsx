import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  sublabel: string;
  aspectRatio?: string; // e.g. "4/5", "16/9", "1/1"
  width?: string;
  height?: string;
  className?: string;
}

const ImagePlaceholder = ({ label, sublabel, aspectRatio, width, height, className = "" }: ImagePlaceholderProps) => {
  const style: React.CSSProperties = {
    backgroundColor: "#1A1820",
    border: "1px dashed rgba(46,46,254,0.4)",
    borderRadius: 12,
    ...(aspectRatio ? { aspectRatio } : {}),
    ...(width ? { width } : {}),
    ...(height && !aspectRatio ? { height } : {}),
  };

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 p-6 ${className}`}
      style={style}
    >
      <ImageIcon size={32} color="#2E2EFE" strokeWidth={1.5} />
      <span className="text-center font-inter text-[13px] leading-tight" style={{ color: "#8888AA" }}>
        {label}
      </span>
      <span className="text-center font-inter font-medium text-[12px]" style={{ color: "#2E2EFE" }}>
        {sublabel}
      </span>
    </div>
  );
};

export default ImagePlaceholder;
