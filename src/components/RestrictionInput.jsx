import {
    Input,
    Button
} from "@material-tailwind/react";


function RestrictionInput({ restriction, setRestriction}) {
    return (
            <Input
                type="tel"
                placeholder="2X1>=2X2"
                value={restriction}
                onChange={(e) => setRestriction(e.target.value)}
                className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
            />
    )
}

export default RestrictionInput