import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { IAnimal } from "../../../model/animal";
import { AnimalForm } from "./animal-form";
import { URL } from "../../../contants";

type TanimalState = {
  animal: IAnimal | null;
  loading: boolean;
  error: boolean;
};

export const EditAnimal = () => {
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
    <div>
      {animalState.loading && "loading"}
      {animalState.error && "error"}
      {animalState.animal && <AnimalForm animal={animalState.animal} />}
    </div>
  );
};
