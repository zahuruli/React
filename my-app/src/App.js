import React from "react"
import './app.css'

import Card from './components/card/Card'


function App() {
  return (
    <div>
      <h1 className={"headingStyle"}>Hello worlds</h1>
    <Card titleText="call mother" descText="This is desc1" />
    <Card titleText="call father" descText="This is desc2" /> 
     <Card titleText="call brother" descText="This is desc3" />
    </div>
  );
}

export default App;
