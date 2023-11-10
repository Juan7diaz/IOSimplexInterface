import { useState } from 'react'

function Display (){
    return(
        <div className="display">
                <div className="col-span-2 text-center text-xl">
                    Reset
                </div>
                <input 
                  type="text" 
                  inputMode="none" 
                  value="0.00"
                  className="col-span-5 text-right text-4xl bg-transparent tracking-wider select-auto focus:outline-none"
                />
                <div className="col-span-2 text-center text-xl">
                    Pcs
                </div>
            </div>
    )
}

export default Display