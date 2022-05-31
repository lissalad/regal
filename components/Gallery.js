// import Picture from "./Picture";
import Picture from "./Picture";
import data from "/Users/lissa/dev/regal/dress-data.json";


function Gallery({ color }) {
  
  const dresses = data.filter(dress => dress.colors.includes(color))
  .map(({ title, price, img, link }, i) => {
    return (
      <div className="">
        <Picture title={title} classes="w-[300px]" id={i}/> 
      </div>
    );
  });

  return (
    <div>
      {dresses} 
   </div>
  );

}

export default Gallery;