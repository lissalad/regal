// import Picture from "./Picture";
import Picture from "./DressIcon";
import data from "/Users/lissa/dev/regal/dress-data.json";


function Gallery({ color }) {
  
  const dresses = data.filter(dress => dress.colors.includes(color))
  .map(({ title, price, img, link }, i) => {
    return (
      <Picture title={title} classes="w-[300px]" key={i}/> 
    );
  });

  return (
    <div className="flex flex-row flex-wrap w-full justify-left">
      {dresses} 
   </div>
  );

}

export default Gallery;