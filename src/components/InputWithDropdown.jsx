import React from "react";
import {
  Input,
  Menu,
  MenuList,
  MenuItem,
  MenuHandler,
  Button,
} from "@material-tailwind/react";

export function InputWithDropdown() {

  const [ types  ] = React.useState(['maxZ', "minZ"])
  const [ typeSelected, setTypeSelected ] = React.useState(types[0])
  console.log(typeSelected)

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Menu placement="bottom-start">
        <MenuHandler>
          <Button
            ripple={false}
            variant="text"
            color="blue-gray"
            className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
          >
            {typeSelected}
          </Button>
        </MenuHandler>
        <MenuList className="max-h-[20rem] max-w-[18rem]">
          {types.map((type) => {
            return (
              <MenuItem
                key={type}
                value={type}
                className="flex items-center gap-2"
                onClick={() => setTypeSelected(type)}
              >
               <span className="ml-auto">{type}</span>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <Input
        type="tel"
        placeholder="Mobile Number"
        className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{
          className: "min-w-0",
        }}
      />
    </div>
  );
}