import billardspic from './assets/images.jpeg'


function Card(){
  
   return(
       <div className = "card">
       <img src = {billardspic} alt = "Billards Pic"></img>
       <h2 className= "card-title">Billards Ranked</h2>
       <p className="card-text"> CCNY Billards Competetive Queue </p>
   </div>
   );
}
export default Card