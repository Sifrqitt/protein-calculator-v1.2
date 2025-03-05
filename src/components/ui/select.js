export function Select({ children, onValueChange, defaultValue }) {
  return (
    <select
      defaultValue={defaultValue}
      onChange={(e) => onValueChange(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md"
    >
      {children}
    </select>
  );
}

export function SelectTrigger({ children }) {
  return <div className="border p-2 rounded-md">{children}</div>;
}

export function SelectValue({ placeholder }) {
  return <option disabled>{placeholder}</option>;
}

export function SelectContent({ children }) {
  return <>{children}</>;
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
