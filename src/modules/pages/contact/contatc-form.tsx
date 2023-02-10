import axios from "axios";
import dayjs from "dayjs";
import { watch } from "fs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IContact, IAnimal } from "../../../model/animal";
import { defaultAnimal } from "../../../utils/animal-utils";

type Props = {
  animal: IAnimal;
};

type TcontactState = {
  error: boolean;
  loading: boolean;
  success: boolean;
  pet: IAnimal | null;
};

export const ContactForm = (props: Props) => {
  const [contactState, setContactState] = useState<TcontactState>({
    error: false,
    loading: false,
    success: false,
    pet: null,
  });

  const {
    register,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: props.animal,
  });
  const watchPet = watch("pet");
  const now = dayjs().format("YYYY-MM-DD");

  const onSubmit = async (data: IAnimal) => {
    setContactState({ ...contactState, loading: true });

    try {
      const res = defaultAnimal
        ? await axios.post(`${URL}/animal`, data)
        : await axios.put(`${URL}/animal/${props.animal._id}`, data);
    } catch (e) {}
  };

  return (
    <div className="contatc-form">
      <form>
        <div className="space">
          <label htmlFor="firstName">Insert your name</label>
          <input
            id="firstName"
            {...register("firstName", {
              required: { value: true, message: "obligatory field" },
              minLength: { value: 2, message: "min 2 char for the name" },
              maxLength: { value: 15, message: "max 15 char for the name" },
            })}
            placeholder="Name"
          />
        </div>
        <div className="space">
          <label htmlFor="lastName">Insert your lastname</label>
          <input
            id="lastName"
            {...register("lastName", {
              required: { value: true, message: "obligatory field" },
              minLength: { value: 2, message: "min 2 char for the name" },
              maxLength: { value: 15, message: "max 15 char for the name" },
            })}
            placeholder="LastName"
          />
        </div>
        <div className="space">
          <label htmlFor="age">how old are u?</label>
          <input
            type="date"
            max={now}
            {...register("age", {
              required: { value: true, message: "field required" },
            })}
          />
        </div>
        <div>
          <label htmlFor="email">Insert your email</label>
          <input
            id="email"
            {...register("email", {
              required: { value: true, message: "field required" },
              pattern: {
                value: /^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "field required",
              },
            })}
            placeholder="your email"
          />
        </div>
        <div>
          <label htmlFor="phone">your phone number</label>
          <input
            type="number"
            id="phone"
            {...register("phone", {
              required: false,
              maxLength: { value: 10, message: "number too long" },
              minLength: { value: 10, message: "number too short" },
            })}
          />
        </div>
        <div>
          <label htmlFor="pet">Do u have a pet?</label>
          <select
            id="pet"
            {...register("pet", {
              required: { value: true, message: "field required" },
            })}
          ></select>
        </div>
      </form>
    </div>
  );
};
