
import './app.css'

const todo="Todo title";
const date1='02/17/2023'
const date=new Date();
const now="zahurul Family"
const fullDate=date.getDate()
const name1="zahurul ";
const name2=" islam"
const todoDesc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, a?"

const Pstyle={
  backgroundColor:"purple",
  color:"white",
  fontSize:"2rem"
}

function App() {
  return (
    <div>
      <h1 className={"headingStyle"}>Hello worlds</h1>
    
    <div className="card" >
    <p className="cardTitle" >{now}</p>
     <p className="cardDesc">{todoDesc}</p>
    <p className="cardFooter" >{name1 + name2}</p>

  </div>
    </div>
  );
}

export default App;
