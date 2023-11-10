import Header from "../components/Header"
function LandingPage() {
    return (
        <div className="flex flex-col w-96 self-center">
            <Header />
            <input type="text" className="block w-full text-sm text-slate-500" value="Expresión..."></input>
        </div>
    )
}

export default LandingPage