import { downloadImg } from "../utils";
import { download } from "../assets";
import copy from "copy-to-clipboard";

import { useTheme } from "../contexts/ThemeContext";

const Card = ({ _id, name, prompt, photo }) => {
  const { theme } = useTheme();

  const copyToClipboard = () => {
    copy(prompt);
  };

  return (
    <div className="rounded-xl overflow-hidden ease-in duration-600 group relative card">
      <img
        src={photo}
        alt={prompt}
        className="w-full h-auto object-cover rounded-xl  ease-[cubic-bezier(.6,0,.4,1)] duration-300"
      />

      <div className="group-hover:flex flex-col gap-4 max-h-full absolute hidden bottom-0 left-0 right-0 bg-blue-50 dark:bg-secondary-dark m-2 p-4 rounded-md text-md border-primary-border border">
        <p className="primary-para line-clamp-3 text-primary-text">{prompt}</p>

        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="bg-blue-50 rounded-full w-7 h-7 flex justify-center items-center text-sm font-bold border-primary-border border text-primary-text">
              {name[0]}
            </div>
            <p className="primary-para mb-0">{name}</p>
          </div>

          <div className="inline-flex items-center gap-2">
          <button onClick={copyToClipboard} className="mt-2"><box-icon name='copy' color={theme == 'dark' ? 'white' : 'black'}></box-icon></button>
            <button onClick={() => downloadImg(_id, photo)}>
              <img
                src={download}
                alt="download img"
                className="w-6 h-6 object-contain dark:invert"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
