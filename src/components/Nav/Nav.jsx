import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";


export default function Nav({ onSearch, logout }){
    return (
        <div>
            <Link to='/about'><span>About</span></Link>
            <Link to='/home'><span>Home</span></Link>
            <Link to='/favorites'><button>Favorites</button></Link>
            <SearchBar onSearch={onSearch} />
            <button onClick={logout}>LOGOUT</button>
        </div>
    );
}