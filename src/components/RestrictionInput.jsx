import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";


// eslint-disable-next-line react/prop-types
function RestrictionInput({ nVariables, setRestrictions }) {

  const refRestriction = React.useRef(null)
  const refValue = React.useRef(null)


  const initialCoefficients = [...Array(nVariables)].map(() => 1)
  const [coefficient, setCoefficient] = React.useState(initialCoefficients)

  useEffect(() => {
    (nVariables > 0) ? setCoefficient([...Array(nVariables)].map(() => 1)) : setCoefficient([])
  }, [nVariables])


  const onAddRestriction = () => {
    const payload = {
      coefficient: coefficient.map((value) => parseInt(value)),
      restriction: refRestriction.current.value,
      value: parseInt(refValue.current.value)
    }
    console.log(payload)
    setRestrictions(prevRestrictions => [payload, ...prevRestrictions])
    setCoefficient([...Array(nVariables)].map(() => 1))
    refValue.current.value = ""
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    const newCoefficients = [...coefficient]
    newCoefficients[name] = value
    setCoefficient(newCoefficients)
  }

  return (
    <div className="pt-10 px-10 flex">
      <div className="relative flex h-10">
        {[...Array(nVariables)].map((_, i) => (
          <div key={i} className="flex flex-row">
            <input
              placeholder="1"
              className="border px-1 py-2.5 w-20"
              required
              name={i}
              onChange={onInputChange}
              value={coefficient[i]}
            />
            <div className="p-3 text-xs font-bold text-white bg-blue-gray-700 mr-5">
              x{i + 1}
            </div>
          </div>
        ))}
        <div className="p-2 border mr-5">
          <select ref={refRestriction}>
            <option>{">="}</option>
            <option>{"<="}</option>
            <option>{"="}</option>
          </select>
        </div>
        <input placeholder="2" className="border px-1 py-2.5 w-20" required ref={refValue} />
      </div>
      <Button
        className="bg-blue-gray-400 rounded-full mb-2 px-3 py-2 ml-5 mt-1"
        onClick={onAddRestriction}
      >
        +
      </Button>
    </div>
  );
}

export default RestrictionInput;
