import DisplayArray from "./DisplayMatrix"

// eslint-disable-next-line react/prop-types
const ShowMatrixInit = ({data}) => {
  console.log("showMatrixInit", data)
  return (
    <div>
      <DisplayArray array={data.A} name="Matriz A"/>
      <DisplayArray array={data.C} name="Matriz C"/>
      <DisplayArray array={data.X} name="Matriz X"/>
      <DisplayArray array={data.b} name="Matriz b"/>

    </div>
  )
}

export default ShowMatrixInit