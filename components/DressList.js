import classNames from "classnames";
import DressIcon from "./DressIcon";
import Image from "next/image";

import data from "/Users/lissa/dev/regal/dress-data.json";

function DressList({}) {
  const dresses = data.map(({ title, price, img, link }, i) => {
    return <DressIcon title={title} key={i} />;
  });

  return (
    <div className={classNames("flex flex-row flex-wrap justify-center")}>
      {dresses}
    </div>
  );
}

export default DressList;
