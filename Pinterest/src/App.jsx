import React, { useState } from 'react';
import './App.css';
import Header from './Components/header';
import Mainboard from './Components/Mainboard';
import unsplash from './api/unsplash';
import { useEffect } from 'react';

function App() {
  const[pins,setNewPins] = useState([]);

  const getImages=(term)=>{
    return unsplash.get("https://api.unsplash.com/search/photos",{
      params:{
        query: term,
        per_page:15
      }
    });
  };

  const onSearchSubmit = (term) => {
  getImages(term).then((res) => {
    let results = res.data.results;
    let firstFiveResults = results.slice(0, 5);
    let remainingResults = results.slice(5);
    let newPins = [...remainingResults, ...pins];

    newPins.sort(function (a, b) {
      return 0.5 - Math.random();
    });

    let pushPins = [...firstFiveResults, ...newPins];

    setNewPins(pushPins);
  });
};

  const getNewPins=()=>{
    let promises=[];
    let pinData=[];

    let pins=['ocean', 'Tokyo', 'dogs', 'cats', 'trees', 'nature', 'tribe'];
    pins.forEach((pinTerm)=>{
      promises.push(
        getImages(pinTerm).then((res)=>{
          let results=res.data.results;
          pinData=pinData.concat(results);
          pinData.sort(function(a,b){
            return 0.5-Math.random();
          });
        })
      );
    });
    Promise.all(promises).then(()=>{
      setNewPins(pinData);
    });
  };
  
  useEffect(()=>{
    getNewPins();
  },[]);


  return (
    <>
      <div className="App">
        <Header onSubmit={onSearchSubmit}/>
        <Mainboard pins={pins}/>
      </div>
    </>
  )
}

export default App;
