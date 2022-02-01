import React, {useEffect, useState} from "react";
import firebase from "../../utils/fb-config";
import Spinner from "../Spinner";
import ProductCard from "../ProductCard";

const SearchList =({value})=>{

  const [data, setData] = useState(null);

  useEffect(()=>{
    firebase
      .database()
      .ref()
      .once('value')
      .then(snap => setData(snap.val()));
  }, []);

  const allData = data && Object.values(data)
    .map(product => product.data)
    .filter(Boolean)
    .flat(Infinity)
    .filter(product => product.name.toUpperCase().includes(value.toUpperCase()))

  const isData = allData?.length > 0;

  if (!allData){
    return <Spinner className="cards cards-menu"/>
  }

  return(
    <div className="">
      {isData ? allData.map(card => {
        return <ProductCard key={card.id} {...card} />
      }) : <h2>К сожалению товар не найден (</h2>}
    </div>
  )
}

export default SearchList;