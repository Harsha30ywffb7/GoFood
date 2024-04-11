import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //console.log(data);

  const handleclick =()=>{
    setShowIndex();
  }
  return (
    // { Accordian title }
    <div className="w-6/12 m-auto p-4 my-2 shadow-md bg-slate-100">
      <div className="flex justify-between cursor-pointer" onClick={handleclick}>
        <span className="font-bold text-sm">{data.title} ({data.itemCards.length})</span>
        <span>⬇️</span>
      </div>

      {showItems &&< ItemsList Items={data?.itemCards}/>}
    </div>
  );
};

export default RestaurantCategory;
