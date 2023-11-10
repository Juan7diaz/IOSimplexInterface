import {
    Input
} from "@material-tailwind/react";


function RestrictionInput({ restrictions = [], restrictionAdded, setRestriction }) {
    return (
        <div className="relative flex flex-col w-full">
            <Input
                type="tel"
                placeholder="2X1>=2X2"
                value={restrictionAdded}
                onChange={(e) => setRestriction(e.target.value)}
                className="rounded-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
            />
            <p className="border-x border-b border-blue-gray-200 p-2 focus:border-gray-900 text-center invisible">
                pepe
            </p>
        </div>
    )
}

export default RestrictionInput