import React from "react";
import { Route, Routes } from "react-router-dom";
import { Animal } from "./modules/pages/animal/animal";
import { AnimalDetail } from "./modules/pages/animal/animal-detail";
import { EditAnimal } from "./modules/pages/animal/animal-edit";
import { AnimalForm } from "./modules/pages/animal/animal-form";
import { Homepage } from "./modules/pages/homepage/homepage";
import { NotFound } from "./modules/pages/not-found";
import { defaultAnimal } from "./utils/animal-utils";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/animals">
        <Route index element={<Animal />} />
        <Route path="new" element={<AnimalForm animal={defaultAnimal} />} />
        <Route path=":_id" element={<AnimalDetail />} />
        <Route path=":_id/edit" element={<EditAnimal />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
