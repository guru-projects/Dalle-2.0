const Button = ({name, customStyles, icon, handleClick}) => (
  <div className="w-full">
    <button className={`${customStyles} inline-flex w-full items-center gap-2 hover:text-blue-800 hover:bg-blue-200 rounded-lg py-1 my-1 pl-1`} onClick={handleClick}>
      <box-icon name={icon} size='20px'></box-icon>{name}
    </button>
  </div>
);

export default Button;
