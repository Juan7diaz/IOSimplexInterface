import { Tooltip, Typography } from "@material-tailwind/react";

const HeaderObjectiveFunctio = () => {
  return (
    <div className='flex flex-row text-center mb-5'>
      <h1 className="text-orange-950 text-xl font-medium">Inserte la función objetivo</h1>
      <TooltipWithHelperIcon/>
    </div>
  )
}

export function TooltipWithHelperIcon() {
  return (
    <Tooltip
      content={
        <div className="max-w-[50rem]">
          <Typography color="white" className="font-medium">
            Como ingresar correctamente una función objetivo
          </Typography>
          <Typography
            variant="small"
            color="white"
            className="font-normal opacity-80"
          >
            <b>variables:</b> se debe colocar la variable de la forma x1, x2, x3, etc. o cualquier otra letra
          </Typography>
          <Typography
            variant="small"
            color="white"
            className="font-normal opacity-80"
          >
            <b>ecuación:</b> la ecuación debe estar siempre simplificada por ejemplo: 2x1 + 2x2 + 1x3 + 2x4 al pasar algo tipo 2x2 + 3x2 daria un mal funcionamiento
          </Typography>
          <Typography
            variant="small"
            color="white"
            className="font-normal opacity-80"
          >
            <b>coeficiente:</b> si el coeficiente es 1 se debe colocar de la forma 1x1, si es negativo se debe colocar de la forma -1x1
          </Typography>
        </div>
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="h-5 w-5 cursor-pointer text-blue-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    </Tooltip>
  );
}


export default HeaderObjectiveFunctio