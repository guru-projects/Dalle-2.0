import { useTheme } from "../contexts/ThemeContext";

const ThemeChangeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="text-gray-500 hover:text-blue-800 hover:bg-blue-200 rounded-lg w-full text-left text-sm pl-1 pt-1 my-1">
      {theme === "dark" ? (
        <div className="inline-flex items-center gap-2">
          <box-icon name="moon" size="22px"></box-icon>
          <p className="text-base">Dark</p>
        </div>
      ) : (
        <div className="inline-flex items-center gap-2">
          <box-icon name="sun" size="22px"></box-icon>
          <p className="text-base">Light</p>
        </div>
      )}
    </button>
  );
};

export default ThemeChangeButton;
