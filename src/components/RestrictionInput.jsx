import { Button, Input } from "@material-tailwind/react";
import React from "react";


// eslint-disable-next-line react/prop-types
function RestrictionInput({ setRestrictions }) {


    const [currentRestrictions, setCurrentRestrictions] = React.useState("")

    const onAddRestriction = () => {
        setRestrictions((prev) => [currentRestrictions, ...prev])
        setCurrentRestrictions("")
    }

    return (
        <div className="relative flex flex-col w-full" >
            <Input
                type="tel"
                placeholder="2x1 >= 2x2"
                value={currentRestrictions}
                onChange={(e) => setCurrentRestrictions(e.target.value)}
                className="rounded-none !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                    className: "before:content-none after:content-none",
                }}
            />
            <Button
                size="sm"
                color={currentRestrictions ? "gray" : "blue-gray"}
                disabled={!currentRestrictions}
                className="!absolute right-1 top-1"
                onClick={onAddRestriction}
            >+</Button>
        </div>
    )
}

export default RestrictionInput