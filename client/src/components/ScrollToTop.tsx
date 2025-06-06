'use client';
export default function ScrollToTop() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="floating-action">
            <button className="fab" onClick={handleScrollToTop} title="Back to Top">
                <i className="fas fa-arrow-up"></i>
            </button>
        </div>
    );
}