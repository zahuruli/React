
const todo="Todo title";
const date1='02/17/2023'
const date=new Date();
const now=date.getFullYear()
const fullDate=date.getDate()
const name1="zahurul ";
const name2=" islam"

function App() {
  return (
    <div>
      <h1>Hello worlds</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, a?</p>
      <h3>{todo}</h3>
      <p>{date1}</p>
      <p>{fullDate}</p>
      <p>{now}</p>
      <p>{name1 + name2}</p>
    </div>
  );
}

export default App;
