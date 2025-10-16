import React from "react";

type TextInputProps = {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    type?: React.HTMLInputTypeAttribute; // e.g. "text", "email", "number"
    placeholder?: string;
    className?: string; // extra classes if you want
};

const TextInput: React.FC<TextInputProps> = ({
    label,
    name,
    value,
    onChange,
    required = false,
    type = "text",
    placeholder,
    className = "",
}) => {
    return (
        <div className={`mb-4 ${className}`}>
            <label htmlFor={name} className="block font-semibold">
                {label}
            </label>
            <input
                id={name}
                name={name}               // ✅ use the prop, not a hard-coded "title"
                type={type}
                className="w-full p-2 border rounded-lg"
                value={value}
                onChange={onChange}       // ✅ properly typed handler
                required={required}
                placeholder={placeholder}
            />
        </div>
    );
};

export default TextInput;
