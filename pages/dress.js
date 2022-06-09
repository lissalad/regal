import classNames from "classnames";
import DressImage from "../components/DressImage";

export default function dress() {
  return (
    <main>
      {/* image */}
      <div>
        <DressImage
          title="Burgundy Evening"
          classes={classNames("w-[320px] m-6", "md:w-[600px]")}
        />
      </div>

      {/* info */}
      <div
        className={classNames(
          "flex flex-col justify-between items-center w-full space-y-8", "md:w-fit"
        )}
      >
        <div className={classNames("flex flex-col items-center space-y-2")}>
          <h1 className="text-3xl">Burgundy Evening</h1>
          <p>$128.00</p>
        </div>
        
        <div className="flex flex-row space-x-2">
          <p className="text-lg">size</p>
          <select
            className="border-[1px] border-black/40 rounded-sm"
            name="size"
            id="size"
          >
            <option value="xs">extra small</option>
            <option value="sm">small</option>
            <option value="md" selected>
              medium
            </option>
            <option value="lg">large</option>
            <option value="xl">extra large</option>
          </select>
        </div>
      </div>
      <button
        className={classNames(
          "bg-pink-900/80 text-white fixed left-0 bottom-0 w-full py-4",
          "md:relative md:px-12 md:py-2 md:w-fit md:h-fit md:border-pink-700/60 md:bg-white md:text-black md:rounded-sm md:border-[3px]"
        )}
      >
        purchase
      </button>
    </main>
  );
}
