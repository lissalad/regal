import classNames from "classnames";
import Item from "./Item";
import data from "/Users/lissa/dev/regal/dress-data.json";

function List({}) {
  const dresses = data.map(({ title, price, img, link }, i) => {
    return <Item title={title} id={i} key={i} />;
  });

  return (
    <div className={classNames("flex flex-row flex-wrap justify-center", "md:-mt-4")}>
      {dresses}
    </div>
  );
}

export default List;
