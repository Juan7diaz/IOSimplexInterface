import {
  Input,
  Menu,
  MenuList,
  MenuItem,
  MenuHandler,
  Button,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export function InputWithDropdown({types = [], setTypeSelected, typeSelected}) {

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
        <MenuList className="max-h-[20rem] max-w-[2rem]">
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
        placeholder="2X1 + 2X2 + 1X3 + 2X4"
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