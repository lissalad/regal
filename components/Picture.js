import Image from "next/image";
import data from "/Users/lissa/dev/regal/dress-data.json";

function Picture({ title, classes }) {

  // get dress with given title (first in list, hopefully only)
  let dress = data.filter(dress => dress.title === title)[0];
  console.log(dress);

  return (
    <div className={classes}>
      <Image src={"/images/" + dress.img} alt="gown" width="100%" height="100%" layout="responsive" objectFit="contain" />
    </div>
  );
}
export default Picture;
