import React from "react"
import { InputWithDropdown } from "../components/InputWithDropdown"
import { Button } from "@material-tailwind/react"
import { parseObjectiveFunction } from "../helpers/helpers"
import HeaderObjectiveFunction from "../components/HeaderObjectiveFunction"
import RestrictionInput from "../components/RestrictionInput"


function LandingPage() {

    // para seleccionar el tipo de problema
    const [ types  ] = React.useState(['maxZ', "minZ"])
    const [ typeSelected, setTypeSelected ] = React.useState(types[0])
    const [ objectiveFunction, setObjectiveFunction ] = React.useState("")

    // para las restricciones
    const [restriction, setRestriction]= React.useState("")

    // para hacer la peticion al servidor
    const onSubmit = () => {
        console.log(parseObjectiveFunction(objectiveFunction, typeSelected))
    }

    const onSubmitRestrictions = () => {
        console.log("Holaaa")
    }

    return (
        <div className="mx-auto relative flex flex-col w-full max-w-[30rem] pt-10 px-4">
                <HeaderObjectiveFunction />
                <InputWithDropdown types={types} typeSelected={typeSelected} setTypeSelected={setTypeSelected} objectiveFunction={objectiveFunction} setObjectiveFunction={setObjectiveFunction}/>
                <Button className="mt-5 mb-6" onClick={onSubmit}>Resolver</Button>
                <HeaderObjectiveFunction/>
                <div className="relative flex w-full">
                <RestrictionInput restriction={restriction} setRestriction={setRestriction} />
                <Button size="sm" color={restriction ? "gray" : "blue-gray"} disabled={!restriction} className="!absolute right-1 top-1 rounded">+</Button>
                </div>
                
        </div>
    )
}

export default LandingPage