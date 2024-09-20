import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  description?: string;
}

export function Textarea({ label, id, className, description, ...props }: TextareaProps) {
  const descriptionId = description ? `${id}-description` : undefined;

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
      {description && (
        <p id={descriptionId} className="text-gray-400 mb-2">
          {description}
        </p>
      )}
      <textarea
        id={id}
        className={`mt-1 block w-full rounded-md bg-black border-gray-700 border text-white text-lg px-4 py-3 ${className}`}
        rows={3}
        aria-describedby={descriptionId}
        {...props}
      />
    </div>
  );
}
