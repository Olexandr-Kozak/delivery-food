import firebase from "../utils/fb-config";
import {useEffect, useState} from "react";



const usePageData = (fieldName) =>{

  const [data, setData] = useState(null);

  useEffect(()=>{
      firebase
        .database()
        .ref()
        .child(fieldName)
        .once('value')
        .then(snap => setData(snap.val()))
  }, [])

  return data;
};

export default usePageData;