import axios from "axios";
import { parseObjectiveFunction, parseRestrictions } from "./helpers";

export const getMatrixs = async (
  nVariables,
  objectiveFunction,
  typeSelected,
  restrictions
) => {
  const data = {
    n_variables: nVariables,
    obj_funct: parseObjectiveFunction(objectiveFunction, typeSelected),
    restrictions: parseRestrictions(restrictions),
  };
  try {
    const res = await axios.post(
      "https://simplex-method-api.onrender.com",
      data
    );
    return res.data;
  } catch {
    return null;
  }
};

export const getSolution = async () => {
  try {
    const res = await axios.get(
      "https://simplex-method-api.onrender.com/solution"
    );
    return res.data;
  } catch {
    return null;
  }
};
