
function Keyboard() {
    return(
        <div className="grid grid-rows-4 grid-flow-col gap-4">
            <button>
                <span>7</span>
            </button>
            <button>
                <span>8</span>
            </button>
            <button>
                <span>9</span>
            </button>
            <button>
                <span className="text-xl">Delete</span>
            </button>
            <button>
                <span>4</span>
            </button>
            <button>
                <span>5</span>
            </button>
            <button>
                <span>6</span>
            </button>
            <button>
                <span>+/-</span>
            </button>
            <button>
                <span>1</span>
            </button>
            <button>
                <span>2</span>
            </button>
            <button>
                <span>3</span>
            </button>
            <button className="row-span-2">
                <span className="text-xl">Done</span>
            </button>
            <button className="col-span-2">
                <span>0</span>
            </button>
            <button>
                <span>.</span>
            </button>
        </div>
    )
    
}

export default Keyboard