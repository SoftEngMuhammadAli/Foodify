import React from "react";

const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  rightElement,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-gray-200 focus:ring-2 ring-orange-500 focus:outline-none font-medium placeholder-transparent"
      />
      <label className="absolute left-4 top-2 text-gray-400 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
        {label}
      </label>
      {rightElement && (
        <div className="absolute right-4 top-4">{rightElement}</div>
      )}
    </div>
  );
};

export default InputField;
