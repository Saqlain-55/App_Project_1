import React from'react';

function App(props){
    return(
        <div> 
            <type input="text"/>
            <p> today we are serving{props.dishname}</p>
            <h2>we are also serving sweet dish{props.sweetdish}</h2>

        </div>

    )
}
   export default App;