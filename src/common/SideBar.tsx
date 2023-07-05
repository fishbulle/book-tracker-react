import { useState } from "react";
import { GiBookCover } from 'react-icons/gi';

const SideBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarOpen = () => {
        setSidebarOpen(true);
    };

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="sidebar">
            {!sidebarOpen ? (
                <div className="sidebar_icon" onMouseEnter={handleSidebarOpen}>
                    <GiBookCover />
                </div>
            ) : (
                <>
                    <div className="sidebar_icon" onMouseLeave={handleSidebarClose}>
                        <GiBookCover />
                    </div>
                    <div className="sidebar_items">
                        <p>This will show what book you're reading right now</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default SideBar