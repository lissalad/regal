import classNames from "classnames";
import Image from "next/image";
import data from "/Users/lissa/dev/regal/dress-data.json";

function DressIcon({ title }) {

  // get dress with given title (first in list, hopefully only)
  let dress = data.filter(dress => dress.title === title)[0];
  // console.log(dress.img);

  return (
    <div className={classNames("w-[300px] m-4","")}>
      <Image src={"/images/" + dress.img} alt="gown" width="100%" height="100%" layout="responsive" objectFit="contain" />
    </div>
  );
}
export default DressIcon;
