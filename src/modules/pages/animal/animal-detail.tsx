import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { URL } from "../../../contants";
import { IAnimal } from "../../../model/animal";
import { AnimalCardDetail } from "../../components/animal-card-detail";

type TanimalState = {
  animal: IAnimal | null;
  loading: boolean;
  error: boolean;
};

export const AnimalDetail = () => {
  const location = useLocation();
  const animal: IAnimal = location.state;

  const [animalState, setAnimalState] = useState<TanimalState>({
    animal,
    loading: false,
    error: false,
  });

  const params = useParams();
  const _id = params._id;

  const fetchAnimalById = async () => {
    setAnimalState({ ...animalState, loading: true });
    try {
      const res = await axios.get(`${URL}/animal/${_id}`);
      setAnimalState({ ...animalState, loading: false, animal: res.data });
    } catch (e) {
      setAnimalState({ ...animalState, loading: false, error: true });
    }
  };

  useEffect(() => {
    !animal && fetchAnimalById();
  }, []);

  return (
    <div className="animal-detail">
      {animalState.loading && "loading"}
      {animalState.error && "error"}
      {animalState.animal && <AnimalCardDetail animal={animalState.animal} />}
    </div>
  );
};
