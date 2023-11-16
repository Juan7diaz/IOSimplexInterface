import React, { useEffect } from "react";
import * as math from "mathjs";
import { InputWithDropdown } from "./components/InputWithDropdown";
import { Button, Typography } from "@material-tailwind/react";
import {
  getcantVariables,
  parseObjectiveFunction,
  parseRestrictions,
} from "./helpers/helpers";
import HeaderObjectiveFunction from "./components/HeaderObjectiveFunction";
import RestrictionInput from "./components/RestrictionInput";
import { helps_funcObj, helps_restrictions } from "./data/helps";
import ShowAllRetrictions from "./components/ShowAllRetrictions";
import axios from "axios";

function LandingPage() {
  // para seleccionar el tipo de problema
  const [types] = React.useState(["maxZ", "minZ"]);
  const [typeSelected, setTypeSelected] = React.useState(types[0]);
  const [objectiveFunction, setObjectiveFunction] = React.useState("");

  const [data, setData] = React.useState({});

  // para las restricciones
  const [restrictions, setRestrictions] = React.useState([]);
  const [nVariables, setNVariables] = React.useState(2);

  // para saber cuantas variables tiene la funcion objetivo
  useEffect(() => {
    try {
      setNVariables(getcantVariables(math.parse(objectiveFunction.trim())));
    } catch (e) {
      setNVariables((prev) => prev);
    }
  }, [objectiveFunction]);

  // para hacer la peticion al servidor
  const onSubmit = async () => {
		console.log(restrictions)
    const data = {
      n_variables: nVariables,
      obj_funct: parseObjectiveFunction(objectiveFunction),
      restrictions: parseRestrictions(restrictions),
    };
    const res = await axios.post(
      "https://simplex-method-api.onrender.com",
      data
    );
    setData(res.data);
  };

  return (
    <div className="pt-10 px-10 content-center">
      <div className="relative flex flex-col">
        <HeaderObjectiveFunction
          title="Introduzca la función objetivo"
          data={helps_funcObj}
          titleHelps="Como ingresar datos correctamente"
        />
        <InputWithDropdown
          types={types}
          typeSelected={typeSelected}
          setTypeSelected={setTypeSelected}
          objectiveFunction={objectiveFunction}
          setObjectiveFunction={setObjectiveFunction}
        />
      </div>
      {nVariables > 0 && (
        <>
          <HeaderObjectiveFunction
            title="introduzca la restricción"
            data={helps_restrictions}
            titleHelps="Como enseñarte a no ser menso"
          />
          <RestrictionInput
            setRestrictions={setRestrictions}
            nVariables={nVariables}
          />
          {restrictions.length > 0 && (
            <ShowAllRetrictions
              restrictions={restrictions}
              setRestrictions={setRestrictions}
            />
          )}
        </>
      )}
      <Button className="mt-5 mb-7" onClick={onSubmit}>
        Resolver
      </Button>
      {data && (
        <>
          <Typography>MATRIX X: {JSON.stringify(data.X)}</Typography>
          <Typography>MATRIX C: {JSON.stringify(data.C)}</Typography>
          <Typography>MATRIX b: {JSON.stringify(data.b)}</Typography>
          <Typography>MATRIX A: {JSON.stringify(data.A)}</Typography>
        </>
      )}
    </div>
  );
}

export default LandingPage;
