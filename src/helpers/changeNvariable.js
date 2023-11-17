import { getcantVariables } from "./helpers";
import * as math from "mathjs";

export const getVariablesInObjectiveFunctions = (objectiveFunction) => {
  try {
    return getcantVariables(math.parse(objectiveFunction.trim()))
  } catch (e) {
    return -1;
  }
};
