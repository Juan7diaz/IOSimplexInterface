import React from "react"
import { InputWithDropdown } from "../components/InputWithDropdown"
import { Button } from "@material-tailwind/react"
import { parseObjectiveFunction, parseRestrictions} from "../helpers/helpers"
import HeaderObjectiveFunction from "../components/HeaderObjectiveFunction"
import RestrictionInput from "../components/RestrictionInput"
import { helps_funcObj, helps_restrictions } from "../data/helps"
import ShowAllRetrictions from "../components/showAllRetrictions"


function LandingPage() {

	// para seleccionar el tipo de problema
	const [ types  ] = React.useState(['maxZ', "minZ"])
	const [ typeSelected, setTypeSelected ] = React.useState(types[0])
	const [ objectiveFunction, setObjectiveFunction ] = React.useState("")

	// para las restricciones
	const [ restrictions, setRestrictions ] = React.useState([])

	// para hacer la peticion al servidor
	const onSubmit = () => {
		const payload = {
			...parseObjectiveFunction(objectiveFunction, typeSelected),
			restrictions: parseRestrictions(restrictions)
		}
		console.log(payload)
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
			<HeaderObjectiveFunction
				title='introduzca la restricción'
				data={helps_restrictions}
				titleHelps='Como enseñarte a no ser menso'
			/>
			<RestrictionInput setRestrictions={setRestrictions} />
			{ restrictions.length > 0 && <ShowAllRetrictions restrictions={restrictions} /> }
			<Button className="mt-5 mb-7" onClick={onSubmit}>Resolver</Button>
		</div>
	)
}

export default LandingPage