import React from "react";
import item_list from "./item_list.json";
import {nanoid} from "@reduxjs/toolkit"
import Card from "./Card";


function Game() {
  let yeniliste = [];
  const karıştır = (liste) => {
    //console.log(liste);
    //console.log(Math.ceil(Math.random()*24));
    
    let sinir = 24;
    let i = 0;
    //console.log(yeniliste.includes(15));
    while(yeniliste.length<24 ){
      let generate = Math.floor(Math.random()*12);
      if((yeniliste.filter(item => item === generate).length)<2){
        yeniliste.push(generate);
      }
      
    }
    console.log(yeniliste);
}
karıştır(item_list);

   return (
    <div className="gameholder">
      <div className="cardholder">
        
        {yeniliste.map((item) => 
          
        <Card key={nanoid()} item={item_list[item]} />
        )}
        <Card key={nanoid()} item={item_list[16]} />
        
      </div>
    </div>
  );
}

export default Game;
