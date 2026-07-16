function TitleBar() {
    return (
        <div className="title-bar">

            <div className="window-buttons">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
            </div>

            <div className="editor-tabs">

                <div className="tab active">
                    portfolio.jsx
                </div>

            </div>

            <div className="brand">
                {"<Ghian />"}
            </div>

        </div>
    );
}

export default TitleBar;