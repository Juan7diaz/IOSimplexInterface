import React from "react"
import axios from "axios"
import { InputWithDropdown } from "./components/InputWithDropdown"
import { Button, Typography } from "@material-tailwind/react"
import { parseObjectiveFunction, parseRestrictions} from "./helpers/helpers"
import HeaderObjectiveFunction from "./components/HeaderObjectiveFunction"
import RestrictionInput from "./components/RestrictionInput"
import { helps_funcObj, helps_restrictions } from "./data/helps"
import ShowAllRetrictions from "./components/ShowAllRetrictions"


function LandingPage() {

	// para seleccionar el tipo de problema
	const [ types  ] = React.useState(['maxZ', "minZ"])
	const [ typeSelected, setTypeSelected ] = React.useState(types[0])
	const [ objectiveFunction, setObjectiveFunction ] = React.useState("")

	const [ data, setData ] = React.useState({})

	// para las restricciones
	const [ restrictions, setRestrictions ] = React.useState([])

	// para hacer la peticion al servidor
	const onSubmit = async() => {
		const payload = {
			...parseObjectiveFunction(objectiveFunction, typeSelected),
			restrictions: parseRestrictions(restrictions)
		}
		console.log(payload)
		const res = await axios.post("https://simplex-method-api.onrender.com/standard-model", payload, 
		{
			headers: {'Content-Type': 'application/json'}
		}
		)
		console.log(res.data)
		setData(res.data)
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
				title='Introduzca la restricción'
				data={helps_restrictions}
				titleHelps='Como enseñarte a no ser menso'
			/>
			<RestrictionInput setRestrictions={setRestrictions} />
			{ restrictions.length > 0 && <ShowAllRetrictions restrictions={restrictions} /> }
			<Button className="mt-5 mb-7" onClick={onSubmit}>Resolver</Button>
			{ data && (
				<>
				
				<Typography>
					MATRIX X: {JSON.stringify(data.X)} 
				</Typography>
				<Typography>
					MATRIX C: {JSON.stringify(data.C)} 
				</Typography>
				<Typography>
					MATRIX b: {JSON.stringify(data.b)} 
				</Typography>
				<Typography>
					MATRIX A: {JSON.stringify(data.A)} 
				</Typography>
				
				</>
				
			)}
		</div>
	)
}

export default LandingPage