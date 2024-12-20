const Button = ({name, customStyles, icon, handleClick}) => (
  <button className={`${customStyles} inline-flex gap-2`} onClick={handleClick}>
    <box-icon name={icon}></box-icon>{name}
  </button>
);

export default Button;
