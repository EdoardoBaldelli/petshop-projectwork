import axios from "axios";
import { IAnimal } from "../../../model/animal";
import { URL } from "../../../contants";
import { useState } from "react";

type Props = {
  animal: IAnimal;
};

type TanimalState = {
  error: boolean;
  loading: boolean;
};

export const AnimalDelete = (props: Props) => {
  const animal: IAnimal = props.animal;

  const [deleteState, setDeleteState] = useState<boolean>(false);

  const [animalState, setAnimalState] = useState<TanimalState>({
    error: false,
    loading: false,
  });

  const deleteAnimal = async () => {
    setAnimalState({ ...animalState, loading: true, error: false });
    try {
      const res = await axios.delete(`${URL}/animal/${animal._id}`);
      setAnimalState({ ...animalState, loading: false, error: false });
    } catch (e) {
      setAnimalState({ ...animalState, loading: false, error: true });
    }
  };

  return (
    <div>
      <button className="btn" onClick={() => setDeleteState(true)}>
        delete
      </button>
      {deleteState && (
        <div>
          <h4>Are you scure?</h4>
          <button className="btn" onClick={deleteAnimal}>
            yes!
          </button>
          <button className="btn" onClick={() => setDeleteState(false)}>
            no!
          </button>
        </div>
      )}
    </div>
  );
};
