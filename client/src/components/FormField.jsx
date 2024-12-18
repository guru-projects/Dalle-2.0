import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  handleChange,
  value,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button onClick={handleSurpriseMe} className="font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black">
            Surprise Me
          </button>
        )}
      </div>
      <input 
        type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder} 
        value={value}
        onChange={handleChange}
        // required
        className="bg-gray-50 border border-gray-300 p-3 rounded-lg text-gray-900 text-sm focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full"
      />
    </div>
  );
};

export default FormField;
