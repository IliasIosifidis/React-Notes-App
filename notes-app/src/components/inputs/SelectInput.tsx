import React from "react";

type Option = {
    value: string;
    label: string;
};

type SelectInputProps = {
    label: React.ReactNode;
    name: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    options: Option[];
    required?: boolean;
    className?: string;
};

const SelectInput: React.FC<SelectInputProps> = ({
                                                     label,
                                                     name,
                                                     value,
                                                     onChange,
                                                     options,
                                                     required = false,
                                                     className = "",
                                                 }) => {
    return (
        <div className={`mb-4 ${className}`}>
            <label htmlFor={name} className="block font-semibold">
                {label}
            </label>
            <select
                id={name}
                name={name}
                className="w-full p-2 border rounded-lg"
                value={value}
                onChange={onChange}
                required={required}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
