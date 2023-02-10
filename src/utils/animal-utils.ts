import { IAnimal, IContact } from "../model/animal";

export const defaultAnimal: IAnimal = {
  imgUrl: "",
  name: "",
  pedigree: false,
  description: "",
  type: "",
  breed: "",
  birthDate: "",
};

export const defaultContact: IContact = {
  firstName: "",
  lastName: "",
  text: "",
  email: "",
  phone: null,
  pet: false,
  age: "",
};
