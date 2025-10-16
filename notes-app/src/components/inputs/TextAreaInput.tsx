import React from "react";

type TextAreaInputProps = {
    label: React.ReactNode;
    name: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    required?: boolean;
    rows?: number;
    placeholder?: string;
    className?: string;
};

const TextAreaInput: React.FC<TextAreaInputProps> = ({
                                                         label,
                                                         name,
                                                         value,
                                                         onChange,
                                                         required = false,
                                                         rows = 4,
                                                         placeholder,
                                                         className = "",
                                                     }) => {
    return (
        <div className={`mb-4 ${className}`}>
            <label htmlFor={name} className="block font-semibold">
                {label}
            </label>
            <textarea
                id={name}
                name={name}
                className="w-full p-2 border rounded-lg"
                value={value}
                onChange={onChange}
                required={required}
                rows={rows}
                placeholder={placeholder}
            />
        </div>
    );
};

export default TextAreaInput;
