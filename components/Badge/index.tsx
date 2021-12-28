import clsx from "clsx";

interface BadgeProps {
  className?: string;
  variant?: "outline" | "solid";
}

const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "solid",
}) => {
  return (
    <div
      className={clsx("px-2.5 text-body-sm rounded-full", className, {
        "border-[1px] border-solid border-grey-1 text-grey-1":
          variant === "outline",
        "bg-blue text-white": variant === "solid",
      })}
    >
      {children}
    </div>
  );
};

export default Badge;
