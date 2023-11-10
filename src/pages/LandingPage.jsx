import React from "react"
import { InputWithDropdown } from "../components/InputWithDropdown"
import { Button } from "@material-tailwind/react"
import { parseObjectiveFunction } from "../helpers/helpers"
import HeaderObjectiveFunctio from "../components/HeaderObjectiveFunctio"
import { helps_funcObj } from "../data/helps"


function LandingPage() {

    // para seleccionar el tipo de problema
    const [ types  ] = React.useState(['maxZ', "minZ"])
    const [ typeSelected, setTypeSelected ] = React.useState(types[0])
    const [ objectiveFunction, setObjectiveFunction ] = React.useState("")

    // para las restricciones
    // ...

    // para hacer la peticion al servidor
    const onSubmit = () => {
        console.log(parseObjectiveFunction(objectiveFunction, typeSelected))
    }

    return (
        <div className="mx-auto relative flex flex-col w-full max-w-[30rem] pt-10 px-4">
                <HeaderObjectiveFunctio
                    title='Introduzca la función objetivo'
                    data={helps_funcObj}
                    titleHelps='Como ingresar datos correctamente'
                />
                <InputWithDropdown
                    types={types}
                    typeSelected={typeSelected}
                    setTypeSelected={setTypeSelected}
                    objectiveFunction={objectiveFunction}
                    setObjectiveFunction={setObjectiveFunction}
                />
                <Button className="mt-5" onClick={onSubmit}>Resolver</Button>
        </div>
    )
}

export default LandingPage