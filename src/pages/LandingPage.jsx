import React from "react"
import { InputWithDropdown } from "../components/InputWithDropdown"
import { Button } from "@material-tailwind/react"
import { parseObjectiveFunction, parseRestrictions} from "../helpers/helpers"
import HeaderObjectiveFunction from "../components/HeaderObjectiveFunction"
import RestrictionInput from "../components/RestrictionInput"
import { helps_funcObj, helps_restrictions } from "../data/helps"


function LandingPage() {

    // para seleccionar el tipo de problema
    const [ types  ] = React.useState(['maxZ', "minZ"])
    const [ typeSelected, setTypeSelected ] = React.useState(types[0])
    const [ objectiveFunction, setObjectiveFunction ] = React.useState("")

    // para las restricciones
    const [ restrictions] = React.useState([])
    const [restrictionAdded, setRestriction]= React.useState("")

    // para hacer la peticion al servidor
    const onSubmit = () => {
        console.log(parseObjectiveFunction(objectiveFunction, typeSelected))
    }
    // petición de la restricción
    const onSubmitRestrictions = () => {
        console.log(parseRestrictions(restrictionAdded))
    }

    return (
        <div className="mx-auto relative flex flex-col w-full max-w-[30rem] pt-10 px-4">
                <HeaderObjectiveFunction
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
                <Button className="mt-5 mb-7" onClick={onSubmit}>Resolver</Button>
                <HeaderObjectiveFunction 
                    title='introduzca la restricción'
                    data={helps_restrictions}
                    titleHelps='Como enseñarte a no ser menso'
                />
                <div className="relative flex w-full">
                <RestrictionInput restrictions={restrictions} restrictionAdded={restrictionAdded} setRestriction={setRestriction} />
                <Button size="sm" color={restrictionAdded ? "gray" : "blue-gray"} disabled={!restrictionAdded} className="!absolute right-1 top-1" onClick={onSubmitRestrictions}>+</Button>
                </div>
        </div>
    )
}

export default LandingPage