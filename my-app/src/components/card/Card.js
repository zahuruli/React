import './card.css'

const now="zahurul Family"
const name1="zahurul ";
const name2=" islam"
const todoDesc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, a?"


const Card=()=>{
    return( 
    <div className="card" >
    <p className="cardTitle" >{now}</p>
     <p className="cardDesc">{todoDesc}</p>
    <p className="cardFooter" >{name1 + name2}</p>
   </div>
   )
   
   }


   export default Card;


   