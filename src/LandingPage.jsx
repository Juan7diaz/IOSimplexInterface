import React, { useEffect } from "react";
import * as math from "mathjs";
import { InputWithDropdown } from "./components/InputWithDropdown";
import {
	Button,
	Typography,
	Accordion,
	AccordionHeader,
	AccordionBody,
	ListItem,
} from "@material-tailwind/react";
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

	// para el acordeón
	const [openAcc1, setOpenAcc1] = React.useState(true);
	const [openAcc2, setOpenAcc2] = React.useState(true);
	const [openAcc3, setOpenAcc3] = React.useState(true);
	const [openAcc4, setOpenAcc4] = React.useState(true);

	const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
	const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
	const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);
	const handleOpenAcc4 = () => setOpenAcc4((cur) => !cur);

	const [dataMat, setDataMat] = React.useState({});

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
		setDataMat(res.data);
		console.log(dataMat)
	};

	const { X, C, b, A } = dataMat

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
			{dataMat && (
				<>
					<Accordion open={openAcc1}>
						<AccordionHeader onClick={() => handleOpenAcc1(1)}>Matrix X</AccordionHeader>
						<AccordionBody>
							{X && X.map((Var, index) => (
								<ListItem ripple={true} className="py-1 pr-1 pl-4 font-bold" key={index}>
									{Var}
								</ListItem>
							))}
						</AccordionBody>
					</Accordion>
					<Accordion open={openAcc2}>
						<AccordionHeader onClick={() => handleOpenAcc2(2)}>Matrix C</AccordionHeader>
						<AccordionBody>
							<Typography>{C}</Typography>
						</AccordionBody>
					</Accordion>
					<Accordion open={openAcc3}>
						<AccordionHeader onClick={() => handleOpenAcc3(3)}>Matrix b</AccordionHeader>
						<AccordionBody>
							<Typography>{b}</Typography>
						</AccordionBody>
					</Accordion>
					<Accordion open={openAcc4}>
						<AccordionHeader onClick={() => handleOpenAcc4(4)}>Matrix A</AccordionHeader>
						<AccordionBody>
							<Typography variant="h6" color="gray">{A}</Typography>
						</AccordionBody>
					</Accordion>
				</>
			)}
		</div>
	);
}

export default LandingPage;
