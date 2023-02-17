
import './index.css'

const todo="Todo title";
const date1='02/17/2023'
const date=new Date();
const now=date.getFullYear()
const fullDate=date.getDate()
const name1="zahurul ";
const name2=" islam"

const Pstyle={
  backgroundColor:"purple",
  color:"white",
  fontSize:"2rem"
}

function App() {
  return (
    <div>
      <h1 style={{color:"red",backgroundColor:"black"}}>Hello worlds</h1>
      <p style={Pstyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, a?</p>
      <h3 style={{fontSize:"3rem"}}>{todo}</h3>
      <p>{date1}</p>
      <p>{fullDate}</p>
      <p>{now}</p>
      <p className="headingStyle">{name1 + name2}</p>
    </div>
  );
}

export default App;
