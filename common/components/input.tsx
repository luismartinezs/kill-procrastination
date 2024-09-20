import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

export function Input({ label, id, className, description, ...props }: InputProps) {
  const descriptionId = description ? `${id}-description` : undefined;

  return (
    <div className="w-full">
      {label && <label htmlFor={id} className="block text-lg font-medium text-gray-300 mb-2">{label}</label>}
      {description && (
        <p id={descriptionId} className="text-gray-400 mb-2">
          {description}
        </p>
      )}
      <input
        type="text"
        id={id}
        className={`block w-full rounded-md bg-black border-gray-700 border text-white text-lg px-4 py-3 ${className}`}
        aria-describedby={descriptionId}
        {...props}
      />
    </div>
  );
}