import { BrowserRouter } from "react-router-dom"
import NavBar from "./common/NavBar"

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        </>
    )
}

export default App