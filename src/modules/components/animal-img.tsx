import { IAnimal } from "../../model/animal";


type Props={
    animal:IAnimal;
    
    
}

export const AnimalImg =(props:Props)=>{
    const {animal}=props

    return(
    <div className="img-preview">
        
        <div>
          <img src={animal.imgUrl} alt="" />  
        </div>
    </div>
    )
}