import { useNavigate } from "react-router-dom";
import { IAnimal } from "../../model/animal"
import { AnimalDelete } from "../pages/animal/animal-delete";




type Props ={
    animal:IAnimal
}

export const AnimalCardDetail =(props: Props) =>{
    const {animal} = props;
    const navigate = useNavigate();
    
    return(
        <div className="detail">
            <div>
                <img src={animal.imgUrl} alt="" />
            </div>
            <div className="vignette-name">
                <div className="detail-name">
                    Hi my name is: <b>{animal.name}</b>
                </div>
            </div>
            <div className="vignette-type-breed">
                <div className="detail-type-breed">
                    I am a <i>{animal.breed}</i> breed <i>{animal.type}</i> 
                </div>
            </div>
            <div className="vignette-birth">
                <div className="detail-birth">
                    I m born on {animal.birthDate}
                </div>
            </div>
            <div className="vignette-pedigree">
                <div className="detail-pedigree">
                    Pedigree: {animal.pedigree ? `I m a pure animal!!` : `Sorry i'm not a pure animal but i m still beautifull `}
                </div>
            </div>
            <div className="vignette-description">
                <div className="detail-description">
                    Hey you come here and read something about me {animal.name}: <br />
                    <div>{animal.description}</div>
                </div>
            </div>

            <div className="btn-list">
                return to animal list
            <button className="btn" onClick={() => navigate(`/animals`)}>
                Let's go 
            </button>
            <button className="btn" onClick={()=> navigate(`/animals/${animal._id}/edit`)}>
                edit
            </button>
            <AnimalDelete animal={animal}/>
            </div>
        </div>
    )




}