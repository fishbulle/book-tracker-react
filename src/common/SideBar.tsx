import { useState } from "react";
import { GiBookCover, GiBookmarklet } from 'react-icons/gi';
import cover from '../assets/images/icebreaker.jpg'
import { books } from '../library/books'

import './SideBar.css';

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
                    <GiBookmarklet />
                </div>
            ) : (
                <>
                    <div className="sidebar_icon" onMouseLeave={handleSidebarClose}>
                        <GiBookCover />
                    </div>
                    <div className="sidebar_items">
                        <h3>Currently reading:</h3>
                        <img src={books[5].cover} />
                        <p>{books[5].title} by {books[5].author}</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default SideBar