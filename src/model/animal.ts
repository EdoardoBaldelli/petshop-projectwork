export interface IAnimalResponse {
  animals: IAnimal[];
}

export interface IAnimal extends IContact {
  _id?: string;
  imgUrl: string;
  name: string;
  pedigree: boolean;
  description: string;
  type: string;
  breed: string;
  birthDate: string;
  created_at?: string;
  updated_at?: string;
}

export interface NewAnimal {
  imgUrl: string | null;
  name: string | null;
  pedigree: boolean | null;
  description: string | null;
  type: "DOG" | "CAT" | null;
  breed: string | null;
  birthDate: string | null;
}

export interface IContact {
  firstName?: string;
  lastName?: string;
  text?: string;
  email?: string;
  phone?: number | null;
  pet?: boolean;
  age?: string;
}
