import { IMG_CDN_URL } from "../Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const ItemsList = ({ Items }) => {
  //dispatcher for add items
  const dispatcher = useDispatch();
  const handleAddItem = (item) => {
    dispatcher(addItem(item));
  };

  return (
    <div>
      <div>
        {Items.map((item, key) => {
          return (
            <div className="flex justify-between text-left border-b-2 p-2 my-2">
              <div className="w-10/12" key={item.card.info.id}>
                <span className=" p-2">{item.card.info.name}</span>
                <span>- ₹{item.card.info.price / 100}</span>
                <p className="text-sm text-slate-600 p-3">
                  {item.card.info.description}
                </p>
              </div>

              <div className="w-2/12 p-2">
                <div className="absolute">
                  <button
                    className="ml-3 text-green-500  rounded-md bg-white text-md font-semibold px-4 hover:bg-slate-200"
                    onClick={() => handleAddItem(item)}
                  >
                    ADD
                  </button>
                </div>
                {item.card.info.imageId && (
                  <img
                    className="h-full w-full"
                    src={IMG_CDN_URL + item.card.info.imageId}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemsList;
