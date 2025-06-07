const Wrapper = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`w-[95%] min-w-[300px] max-w-4xl lg:w-[60%] min-h-40 flex gap-5 p-3.5 ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
