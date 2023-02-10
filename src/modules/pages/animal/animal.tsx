import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from "../../../contants";
import { IAnimal } from "../../../model/animal";
import { AnimalCard } from "../../components/animal-card";

type TanimalState = {
  animals: IAnimal[] | null;
  error: boolean;
  loading: boolean;
};

export const Animal = () => {
  const [animalState, setAnimalState] = useState<TanimalState>({
    animals: null,
    error: false,
    loading: false,
  });

  const fetchAnimal = async () => {
    setAnimalState({ ...animalState, loading: true });
    console.log("ttttttttttt");
    try {
      const res = await axios.get(`${URL}/animal`);
      const data: IAnimal[] = res.data;
      setAnimalState({ ...animalState, animals: data, loading: false });
    } catch (e) {
      console.log(e);
      setAnimalState({ ...animalState, error: true, loading: false });
    }
  };

  useEffect(() => {
    console.log("ssssssssss");
    fetchAnimal();
  }, []);

  return (
    <div className="animals">
      {animalState.animals?.map((animal) => (
        <AnimalCard key={animal._id} animal={animal} />
      ))}
    </div>
  );
};
