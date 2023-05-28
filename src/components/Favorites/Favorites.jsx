import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { orderCards, filterCards } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Favorites = (props) => {
    const dispatch = useDispatch();
    const { myFavorites } = props;

    const handlerOrder = (e) => {
        dispatch(orderCards(e.target.value));
    }

    const handlerFilter = (e) => {
        dispatch(filterCards(e.target.value));
    }

    return(
        <div>
            <div>
                <select name="order" onChange={handlerOrder}>
                    <option value='Ascendente'>Ascendente</option>
                    <option value='Descendente'>Descendente</option>
                </select>
                <select name="filter" onChange={handlerFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                    <option value='all'>All</option>
                </select>
            </div>
            <Link to='/home'><span>To Home</span></Link>
            {myFavorites.length && myFavorites.map((character) => {
                return <Card
                id={character.id}
                key={character.id}
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
                />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}



export default connect(mapStateToProps, null)(Favorites);