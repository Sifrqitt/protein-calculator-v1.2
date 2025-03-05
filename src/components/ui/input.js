export function Input({ type, value, onChange, className }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`w-full p-2 border border-gray-300 rounded-md ${className}`}
    />
  );
}
