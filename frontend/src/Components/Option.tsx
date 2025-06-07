const Option = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => {
  return (
    <option className="bg-background2 text-center" value={value}>
      {children}
    </option>
  );
};

export default Option;
