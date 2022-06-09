import classNames from "classnames";
import DressImage from "./DressImage";

function ImageIcon({ title, text }) {
  return (
    <div className="relative group flex justify-center m-2 md:w-[200px] w-[150px]">
      <DressImage title={title} classes="md:w-[200px] w-[150px]"/>
      <p className={classNames("w-full absolute backdrop-blur py-2 bottom-0 text-center transition-all duration-300 text-white/90", 
      "md:opacity-0 md:group-hover:opacity-100" )}>
        {text}</p>
    </div>
  );
}
export default ImageIcon;
