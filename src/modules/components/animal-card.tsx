import { Link, useNavigate } from "react-router-dom";
import { IAnimal, } from "../../model/animal"
import { AnimalDelete } from "../pages/animal/animal-delete";


type Props={
    animal:IAnimal;
    
    
}

export const AnimalCard = (props:Props) =>{
    const{animal,}= props;
    const navigate = useNavigate();
    

    return(
        <div className="animal-card">
            <div className="preview">
                <img src={animal.imgUrl} alt="" />
                <div className="info">
                    <h2>{animal.name}</h2>
                    <h2>{animal.type}</h2>
                </div>
                <div>
                    <button className="btn">
                    <Link to={`${animal._id}`} onClick={()=> navigate(`./animals/:_id`)} className='link' state={animal}>
                    detail
                    </Link>
                    </button>
                </div>
                <Link to={(`/animals/${animal._id}/edit`)}  state={animal} >Edit</Link>
                <AnimalDelete animal={animal}/>
            </div>
                
        </div>
    )
}