import React, {Component,useState } from 'react';



function App(){

    const [Quantity,setQuantity] =useState(0);

    const QuantityIncrease = () => setQuantity(Quantity+1);

   



// function PriceIncrease()

//     {

//         const [Price,setPrice] =useState(1000);

//         const PriceIncrease = () => setPrice(Price+1000);

//     }

    return (

        <div>

           

            <p> Quantity is {Quantity} </p>

            <button onClick={QuantityIncrease}>Increasing Quantity and Price</button>

            <br></br>

            <p> Quantity is {Quantity}  Price: {Quantity*1000}</p>

            <br></br>



        </div>

    );

  }

    export default App;