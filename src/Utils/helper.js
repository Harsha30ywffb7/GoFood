const filterData=(searchText, restaraunts)=>{
    const filteredData = restaraunts.filter((eachRestaraunt)=>
    eachRestaraunt?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
    return filteredData;
  }
  export default filterData;