import "./PageFlipOverlay.css";

function PageFlipOverlay({ isFlipping, prevTheme }) {
    if (!isFlipping) return null;

    return (
        <div className="page-flip-overlay" data-page-theme={prevTheme}>
            <div className="single-page-sheet"></div>
        </div>
    );
}

export default PageFlipOverlay;
