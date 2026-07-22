function Sidebar() {
    return (
        <div className="sidebar">

            <div className="explorer-title">
                EXPLORER
            </div>

            <div className="folder">
                📁 src
            </div>

            <div className="file">
                📁 assets
            </div>

            <div className="file">
                📁 components
            </div>

            <div className="file">
                📁 pages
            </div>

            <div className="file active-file">
                📄 portfolio.jsx
            </div>

        </div>
    );
}

export default Sidebar;
