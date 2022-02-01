import React, {useState} from "react";
import Banner from "../Banner";
import RestaurantList from "./RestaurantList";
import SearchInput from "../SearchInput";
import SearchList from "../SearchList";

const HomePage = () => {

  const [searchStr, setSearchStr] = useState('')

  const handleChange =(e)=>{
    setSearchStr(e.target.value);
  }

  return (
    <>
      <Banner/>
      <section className='restaurants'>
        <SearchInput value={searchStr} onChange={handleChange}/>
        {searchStr ? <SearchList value={searchStr}/> : <RestaurantList/>}

      </section>

    </>
  )
}

export default HomePage;