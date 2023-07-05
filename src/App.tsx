import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./common/NavBar"
import Root from "./home/Home"
import Library from "./library/Library"
import Feed from "./feed/Feed"
import Profile from "./profile/Profile"
import SideBar from "./common/SideBar"

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <SideBar />
                <Routes>
                    <Route path="/" element={<Root />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App