import "../css/EcoProject.css"

function EcoProject({ecoArticle}){

    function onBtnClick() {
        alert("clicked")
    }

    return <div className="ecoArticle-card">
        <div className="ecoArticle-image">
            <img src={ecoArticle.url} alt={ecoArticle.title}/>
            <div className="ecoArticle-overlay">
                <button className="favorite-btn" onClick={onBtnClick} >
                    💚
                </button>
            </div>
        </div>
        <div className="ecoArticle-text">
            <h3>{ecoArticle.title}</h3>
            <p>{ecoArticle.published_date}</p>
        </div>
    </div>
}

export default EcoProject