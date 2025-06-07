const Input = ({
  type,
  label,
  onChange,
  value,
}: {
  type: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}) => {
  const lowerCaseLabel = label.toLowerCase();

  return (
    <div className="">
      <label htmlFor={lowerCaseLabel}>{label}</label>
      <input
        type={type}
        id={lowerCaseLabel}
        onChange={onChange}
        className="w-full h-10 py-5 px-0 bg-background2 border-2 border-border border-solid rounded-xl outline-none focus:border-border2 pl-2"
        value={value}
      />
    </div>
  );
};

export default Input;
