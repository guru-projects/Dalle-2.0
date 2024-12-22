import { downloadImg } from "../utils";
import { download } from "../assets";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="rounded-xl overflow-hidden ease-in duration-600 group relative shadow-card hover:shadow-cardhover card">
      <img
        src={photo}
        alt={prompt}
        className="w-full h-auto object-cover rounded-xl  ease-[cubic-bezier(.6,0,.4,1)] duration-300"
      />

      <div className="group-hover:flex flex-col gap-4 max-h-full absolute hidden bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md text-md">
        <p className="text-white">{prompt}</p>

        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="text-white bg-red-400 rounded-full w-7 h-7 flex justify-center items-center text-sm font-bold">{name[0]}</div>
            <p className="text-white text-sm first-letter:capitalize">{name}</p>
          </div>

          <button onClick={() => downloadImg(_id, photo)}>
            <img src={download} alt="download img" className="w-6 h-6 object-contain invert" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
