function Display (){
    return(
        <div className="display bg-orange-500">
                <input 
                  type="text" 
                  inputMode="none" 
                  value="0.00"
                  className="col-span-5 text-right text-4xl bg-transparent tracking-wider select-auto focus:outline-none"
                />
        </div>
    )
}

export default Display