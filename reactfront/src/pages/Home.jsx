import EcoProject from "../components/EcoProject";
import {useState} from "react"
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

  const ecoArticles = [
      {id: 1, title: "green energy", published_date: "2022"},
      {id: 2, title: "reforestation", published_date: "2024"},
      {id: 3, title: "pollution mitigation", published_date: "2021"},
      {id: 4, title: "species rehabilitation", published_date: "2023"}
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    };

    return (
      <div className="home">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Find an article..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>

        <div className="ecoArticles-grid">
          {ecoArticles.map(
            (ecoArticle) => 
            (
              <EcoProject ecoArticle={ecoArticle} key={ecoArticle.id}/>
            )
          )}
        </div>
      </div>
    );
}

export default Home