import clsx from "clsx";

interface ButtonProps {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={clsx("bg-blue text-white font-semibold px-8 h-10", className)}
    >
      {children}
    </button>
  );
};

export default Button;
