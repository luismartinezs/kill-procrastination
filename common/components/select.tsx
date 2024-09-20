import React from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  label?: string;
}

export function Select({
  options,
  label,
  id,
  className,
  ...props
}: SelectProps) {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-lg font-medium text-gray-300 mb-2"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        className={`mt-1 block w-full rounded-md bg-black border-gray-700 border text-white text-lg px-4 py-3 ${className}`}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
