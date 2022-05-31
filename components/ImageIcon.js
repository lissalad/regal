import classNames from "classnames";
import Picture from "./Picture";

function ImageIcon({ title, text }) {
  return (
  <div className="relative group md:w-[200px] w-[150px]">
      <Picture title={title} classes="md:w-[200px] w-[150px]" />
      <p className={classNames("absolute text-2xl text-white bottom-0 bg-black/60 py-1", "md:hidden md:group-hover:block")}>{text}</p>
  </div>
  );
}
export default ImageIcon;
