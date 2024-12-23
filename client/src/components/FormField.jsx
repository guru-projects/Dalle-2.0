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
          className="block text-sm font-medium text-primary-dark dark:text-primary-light">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black">
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
        className="text-primary-dark dark:text-primary-light border-light-border dark:border-dark-border dark:bg-secondary-dark border p-3 rounded-lg text-sm focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full"></input>
    </div>
  );
};

export default FormField;

export const SelectField = ({
  labelName,
  name,
  handleChange,
  value,
  options = [],
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-sm font-medium mb-2 text-primary-dark dark:text-primary-light">
        {labelName}
      </label>

      <select
        onChange={handleChange}
        name={name}
        id={name}
        className="text-secondary-dark dark:text-secondary-light dark:bg-secondary-dark border border-light-border dark:border-dark-border p-3 rounded-lg text-sm focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full">
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};
