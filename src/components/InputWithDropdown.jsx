import {
  Input,
  Menu,
  MenuList,
  MenuItem,
  MenuHandler,
  Button,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export function InputWithDropdown({types = [], setTypeSelected, typeSelected, ObjectiveFunction, setObjectiveFunction}) {

  return (
    <div className="relative flex">
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
        <MenuList >
          {types.map((type) => {
            return (
              <MenuItem
                key={type}
                value={type}
                onClick={() => setTypeSelected(type)}
              >
               <span>{type}</span>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <Input
        type="tel"
        placeholder="2x1 + 2x2 + 1x3 + 2x4"
        value={ObjectiveFunction}
        onChange={(e) => setObjectiveFunction(e.target.value)}
        className="rounded-l-none !border-t-blue-gray-100 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
    </div>
  );
}