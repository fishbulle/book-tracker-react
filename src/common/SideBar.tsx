import { useState } from "react";

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
                    <i className="fas fa-bars"></i>
                </div>
            ) : (
                <>
                    <div className="sidebar_icon" onMouseLeave={handleSidebarClose}>
                        <i className="fas fa-times"></i>
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