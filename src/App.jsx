import React, { useEffect } from "react";
import { InputWithDropdown } from "./components/InputWithDropdown";
import { Button } from "@material-tailwind/react";
import HeaderObjectiveFunction from "./components/HeaderObjectiveFunction";
import RestrictionInput from "./components/RestrictionInput";
import { helps_funcObj, helps_restrictions } from "./data/helps";
import ShowAllRetrictions from "./components/ShowAllRetrictions";
import Stepper from "./components/Stepper";
import { getMatrixs, getSolution } from "./helpers/fetch";
import { getVariablesInObjectiveFunctions } from "./helpers/changeNvariable";
import ShowMatrixInit from "./components/ShowMatrixInit";
import ShowMatrixByIter from "./components/ShowMatrixByIter";

function Index() {
  // para seleccionar el tipo de problema
  const [types] = React.useState(["maxZ", "minZ"]);
  const [typeSelected, setTypeSelected] = React.useState(types[0]);

  // para guardar la funcion objetivo
  const [objectiveFunction, setObjectiveFunction] = React.useState("");

  // para guardar  los datos que trae la peticion
  const [data, setData] = React.useState(null);

  // para las restricciones
  const [restrictions, setRestrictions] = React.useState([]);
  const [nVariables, setNVariables] = React.useState(2);

  // para saber cuantas variables tiene la funcion objetivo
  useEffect(() => {
    const res = getVariablesInObjectiveFunctions(objectiveFunction);
    setNVariables((prev) => (res !== -1 ? res : prev));
  }, [objectiveFunction]);

  // para hacer la peticion al servidor
  const onSubmit = async () => {
    const resMatrix = await getMatrixs(
      nVariables,
      objectiveFunction,
      typeSelected,
      restrictions
    );
    const resSolution = await getSolution();
    const dataApi = {
      matrix: resMatrix,
      solution: resSolution,
    };
    setData(dataApi);
    console.log(dataApi.solution)
  };

  // para mostrar los datos
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className="pt-10 px-10 content-center pb-40">
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
      <Button className="mt-5 mb-7" onClick={onSubmit} disabled={data}>
        Resolver
      </Button>
      {data && (
        <Button
          className="mt-5 mb-7 ml-2"
          onClick={() => window.location.reload()}
        >
          {" "}
          Reiniciar{" "}
        </Button>
      )}
      {data && (
        <Stepper
          cant={data.solution.num_iters + 1}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      )}
      {data?.solution?.special_case && (
        <div className="text-center mb-5 text-xl font-bold">
          Caso especial: {data.solution.special_case}
        </div>
      )}
      {activeStep == 0 && !!data && <ShowMatrixInit data={data?.matrix} />}
      {activeStep !== 0 && !!data && (
        <ShowMatrixByIter
          data={data?.solution.iterations}
          iter={activeStep - 1}
        />
      )}
    </div>
  );
}

export default Index;
