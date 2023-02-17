import './card.css'

const now="zahurul Family"
const name1="zahurul ";
const name2=" islam"
const todoDesc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, a?"


const Card=(props)=>{
    const {titleText,descText}=props
    return( 
    <div className="card" >
    <p className="cardTitle" >{titleText}</p>
     <p className="cardDesc">{descText}</p>
    <p className="cardFooter" >{name1 + name2}</p>
   </div>
   )
   
   }


   export default Card;


   