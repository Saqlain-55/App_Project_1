import React from 'react';
import './Diner.css';
import './App.css';
import Diner from './Diner';
function App() {
  return (
    <div classname="App">
     <h1> Wellcome to Food Menue</h1>

     <table width="1300" border="20" bg-color="lighht gray"/>
      {/* <Diner></Diner> */ }
      <Diner dishname="Biryani" sweetdish="kheer" />
      <p>
      <img src="../images/B.jpg" alt="Biryani" align="middle"/>
      <br></br>
      <price> <b>200 PKR/ Only</b></price>
      <br></br>
      <a href="https://www.foodpanda.pk/restaurant/u5ma/karachi-biryani-center-phase-3-chowk#"><button>Order Now</button></a>

      
       </p>

      <table width="1300" border="20" bg-color="lighht gray"/>

      <Diner dishname="krahi chiken" sweetdish="kulfa" />
      <p><img src="../images/k.jpg" alt="Chiken krahi" align="middle"/> </p>
      <p>
      <price>
        Price Per serving:<br></br> <b>350 PKR/ Only</b></price>
      <br></br>
      <a href="https://www.foodpanda.pk/restaurant/n4yi/chicken-inn-fast-food#"><button>Order Now</button></a>
        <br/>
        </p>

      <table width="1300" border="20" bg-color="lighht gray"/>

      <Diner dishname="Nihari" />
      <p><img src="../images/N.jpg" alt="Nihari" align="middle" width="300px"/> </p>
      <price>
        Price Per serving:<br></br> <b>350 PKR/ Only</b></price>
      <br></br>
      <a href="https://www.foodpanda.pk/restaurant/n4yi/chicken-inn-fast-food#"><button>Order Now</button></a>
        <br/>
  

    </div>
  );
}

export default App;
