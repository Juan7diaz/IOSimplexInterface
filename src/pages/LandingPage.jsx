import React from "react"
import { InputWithDropdown } from "../components/InputWithDropdown"


function LandingPage() {

    // para seleccionar el tipo de problema
    const [ types  ] = React.useState(['maxZ', "minZ"])
    const [ typeSelected, setTypeSelected ] = React.useState(types[0])
    console.log(typeSelected)


    return (
        <div className="mx-auto relative flex flex-col w-full max-w-[24rem] pt-10 px-4">
            <h1 className="text-orange-950 text-2xl font-medium text-center pb-5">Inserte la función objetivo</h1>
            <InputWithDropdown types={types} typeSelected={typeSelected} setTypeSelected={setTypeSelected}/>
        </div>
    )
}

export default LandingPage