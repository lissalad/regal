import Link from "next/link";
import ImageIcon from "./ImageIcon";
import DressIcon from "./DressIcon";
import DressImage from "./DressImage";

function ByColor() {
  return (
    <section className="flex flex-col">
      <p className="text-3xl text-black p-5 text-center">shop by color</p>
      <div className="flex flex-row flex-wrap">
        <ImageIcon title="Little Red Lace" text="red" />
        {/* <ImageIcon title="Pumpkin Maxi" text="orange" />
        <ImageIcon title="Yellow Banquet" text="yellow" />
        <ImageIcon title="Pastel Green" text="green" />
        <ImageIcon title="Blue Cinderella" text="blue" />
        <ImageIcon title="Extravagant Lavender" text="purple" /> */}
      </div>
    </section>
  );
}

export default ByColor;
