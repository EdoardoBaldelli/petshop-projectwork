import axios from "axios";
import dayjs from "dayjs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IAnimal } from "../../../model/animal";
import { defaultAnimal } from "../../../utils/animal-utils";
import { URL } from "../../../contants";
import { useNavigate } from "react-router-dom";

type TsendingState = {
  error: boolean;
  loading: boolean;
  success: boolean;
};

type Props = {
  animal: IAnimal;
};

export const AnimalForm = (props: Props) => {
  const [sendingState, setSendingState] = useState<TsendingState>({
    error: false,
    loading: false,
    success: false,
  });

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: props.animal,
  });

  const watchType = watch("type");
  const watchImage = watch("imgUrl");
  const navigate = useNavigate();

  const now = dayjs().format("YYYY-MM-DD");

  const onSubmit = async (data: IAnimal) => {
    setSendingState({ ...sendingState, loading: true });

    try {
      const res = defaultAnimal
        ? await axios.post(`${URL}/animal`, data)
        : await axios.put(`${URL}/animal/${props.animal._id}`, data);
      console.log(res);
      setSendingState({ ...sendingState, loading: false, success: true });
      navigate("/animals/_id");
    } catch (e) {
      setSendingState({
        ...sendingState,
        loading: false,
        error: true,
        success: false,
      });
    }
  };

  const changeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue("breed", "", { shouldValidate: true });
    console.log(event.target.value);
    setValue("type", event.target.value, { shouldValidate: true });
  };

  return (
    <div className="add-form">
      <h1>
        <b>a new animal for us </b>
      </h1>

      <form>
        <div className="row">
          <label htmlFor="name">Insert pet's name</label>
          <input
            id="name"
            {...register("name", {
              required: { value: true, message: "obligatory field" },
              minLength: { value: 2, message: "min 2 char for the name" },
              maxLength: { value: 12, message: "max 12 char for the name" },
            })}
            placeholder="Name"
          />
          {errors.name && errors.name?.message}
        </div>

        <div className="row">
          <label htmlFor="type">what is your animal?</label>
          <select
            id="type"
            {...register("type", {
              required: { value: true, message: "chose your type trainer" },
            })}
            onChange={(event) => changeType(event)}
          >
            <option value="">none</option>
            <option value="DOG">dog</option>
            <option value="CAT">cat</option>
          </select>
          {errors.type && errors.type?.message}
        </div>
        {watchType && (
          <div className="row">
            <label htmlFor="breed">what kind ?</label>
            <select
              id="breed"
              {...register("breed", {
                required: { value: true, message: "saywhat kind pls" },
              })}
            >
              {watchType === "DOG" ? (
                <>
                  <option value="">none</option>
                  <option value="Pitbull">pitbull</option>
                  <option value="Doberman">doberman</option>
                  <option value="Pinscher">pinscher</option>
                </>
              ) : (
                <>
                  <option value="">none</option>
                  <option value="Persian">persian</option>
                  <option value="Abyssinian">abyssinian</option>
                </>
              )}
            </select>
            {errors.breed && errors.breed?.message}
          </div>
        )}

        <div className="row">
          <label htmlFor="birthdate">when is born your animal?</label>
          <input
            id="birthdate"
            type="date"
            max={now}
            {...register("birthDate", {
              required: { value: true, message: "field required" },
            })}
            placeholder="birthdate"
          />
          {errors.birthDate && errors.birthDate?.message}
        </div>

        <div className="row">
          <label htmlFor="image">insert an immage for your animal</label>
          <input
            id="image"
            {...register("imgUrl", {
              required: { value: false, message: "field required" },
            })}
            placeholder="image"
          />
          {errors.imgUrl && errors.imgUrl?.message}
        </div>
        <div className="form-img">
          {watchImage && <img src={watchImage} alt="" />}
        </div>

        <div className="row-p">
          <label htmlFor="pedigree">have your animal a pedigree?</label>
          <input
            id="pedigree"
            type="checkbox"
            {...register("pedigree", {
              required: { value: false, message: "field required" },
            })}
          />
          {errors.pedigree && errors.pedigree?.message}
        </div>

        <div className="row">
          <label htmlFor="description">describe your animal</label>
          <textarea
            className="animal-desc"
            id="description"
            {...register("description", {
              required: { value: true, message: "field required" },
              maxLength: { value: 200, message: "description too long" },
              minLength: { value: 50, message: "description too short" },
            })}
            placeholder="description of your beautifull animal"
          />
          {errors.description && errors.description?.message}
        </div>

        <button
          className="btn"
          disabled={!isValid && !sendingState.loading}
          onClick={handleSubmit(onSubmit)}
        >
          send information
        </button>
      </form>
    </div>
  );
};
