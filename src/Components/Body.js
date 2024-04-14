import React from 'react';
import RestarauntCard from './RestarauntCard'
import {useState,useEffect, useContext} from 'react';
import userContext from '../Utils/userContext';
import { restaurants } from '../Constants';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import filterData from '../Utils/helper';
import { withPromotedLabel } from './RestarauntCard';
import userContext from '../Utils/userContext';

// 93810 55319
const Body = () => {

  const [searchText, setSearchText] = useState("");

  const restarauntWithPromotedlabel = withPromotedLabel(RestarauntCard);
  // removed old data and only taking data from API's.
  const [allRestaraunts,setAllRestaraunts] = useState([]);
  //filtered copy
  const [filteredRestaraunts, setFilteredRestaurants]= useState([]);

  useEffect(()=>{
    getRestaraunts();
    console.log("use-effect calls")
  },[]);

  async function getRestaraunts(){
    setAllRestaraunts(restaurants);
    setFilteredRestaurants(restaurants);
  }
  
  const {setUserName} = useContext(userContext);

  if(!allRestaraunts) return null;

  return (
    <>
    <div className="my-2 p-2 mx-2 bg-pink-50 font-sans ">
      <input className="mr-3 p-1"type="text" 
      placeholder="Search"
      value={searchText}
      onChange = {
        (e)=>{setSearchText(e.target.value)}
      }/>

      <button className="bg-red-500 text-white rounded-lg p-1 hover:bg-red-400" 
      onClick={
        ()=>{
          const data = filterData(searchText,allRestaraunts);
          setFilteredRestaurants(data);
      }}
      >Search</button>
    </div>

    
    {(allRestaraunts?.length===0)?<Shimmer/>:
    (
      <div className='flex flex-wrap justify-center mx-10'>
        {
            filteredRestaraunts.map((restaraunt)=>{
                return(<Link to={"/restaurants/"+restaraunt.info.id} key={restaraunt.info.id}>

                  {/*Here Load the page based on the higher order components if any use is there.*/ }
                  <RestarauntCard key = {restaraunt.info.id} {...restaraunt.info}/>
                  </Link>)
            })
        }
    </div>
    )
    }
    </>
  )
}

export default Body;