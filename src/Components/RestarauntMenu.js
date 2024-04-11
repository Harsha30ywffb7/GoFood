
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../Constants';
import { useState } from 'react';
import { Menu } from '../RestrauntMenuHardcoded';
import RestaurantCategory from './RestaurantCategory';

const RestarauntMenu = () => {
  const resId = useParams();

  const [restarauntMenu, setRestarauntMenu] = useState([]);

  const [showIndex, setShowIndex] = useState(null);

  const { name, cuisines, costForTwoMessage } = Menu.data.cards[2].card.card.info;
  //console.log(Menu?.data);

  const categories = Menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  //console.log(categories)

  return (
    <div className='RestarauntMenu'>

      <div className='text-center'>
        <p className='font-bold my-5 text-xl'>{name}</p>
        <p className='font-bold '>{Menu.data.cards[2].card.card.info?.cuisines} - {Menu.data.cards[2].card.card.info?.costForTwoMessage}</p>

        {
          categories.map((category, index)=>{
            return <RestaurantCategory data ={category.card.card} key={category.card.card.name} 
            showItems={index === showIndex ? true : false}
            setShowIndex={()=> setShowIndex(index )}/>
          }
        )
        }
      </div>






    </div>
  )
}

export default RestarauntMenu;