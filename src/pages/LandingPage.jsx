import Header from "../components/header/Header"
function LandingPage() {
    return (
        <div className="w-96">
            <Header />
            <input type="text" className="block w-full text-sm text-slate-500" value="Expresión..."></input>
        </div>
    )
}

export default LandingPage