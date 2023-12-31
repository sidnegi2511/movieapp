import { data } from "../data";
import Navbar from "./navbar";
import MovieCard from "./movieCard";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">
            Movies
          </div>
          <div className="tab">
            Favourite
          </div>
        </div>
        <div className="list">
          {
            data.map((movie,id) =>
              <MovieCard movie={movie} key={id}/>
            )
          }
        </div>

      </div>
    </div>
  );
}

export default App;
