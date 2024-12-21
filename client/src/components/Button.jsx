const Button = ({name, customStyles, icon, handleClick}) => (
  <button className={`${customStyles} inline-flex items-center gap-2`} onClick={handleClick}>
    <box-icon name={icon} size='20px'></box-icon>{name}
  </button>
);

export default Button;
