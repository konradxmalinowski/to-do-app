const Button = ({
  label,
  onClick,
  className,
}: {
  label: string;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      className={`pointer flex justify-center items-center gap-1 text-[17px] font-bold -tracking-normal bg-purple1 border-2 border-purple2 rounded-2xl shadow-[0_5px_0] shadow-purple2 transition-transform px-3 py-1.5 hover:scale-105 hover:transition-transform active:translate-y-2 active:shadow-none ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
