interface Select {
  name: string;
  id: string;
  defaultValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  children: React.ReactNode;
}

const Select = ({
  name,
  id,
  defaultValue,
  onChange,
  className,
  children,
}: Select) => {
  return (
    <select
      name={name}
      id={id}
      defaultValue={defaultValue}
      onChange={onChange}
      className={`pointer outline-none ${className}`}
    >
      {children}
    </select>
  );
};

export default Select;
