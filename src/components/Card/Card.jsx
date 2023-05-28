import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from '../../redux/actions';
import { connect } from "react-redux";
import { useState, useEffect } from "react";

export function Card(props) {
   const [isFav, setIsFav] = useState(false);
   const { addFav, removeFav, myFavorites } = props;

   const handleFavorite = () => {
      isFav ? removeFav(props.id) : addFav(props);
      setIsFav(!isFav);
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.tarjeta}>
         {
         isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)}
         <button className={style.boton} onClick={() => props.onClose(props.id)}>X</button>
         <img className={style.image} src={props.image} alt="img not found" />
         <Link to={`/detail/${props.id}`}>
            <h4 className={style.name}>{props.id}</h4>
         </Link>
         <div className={style.text}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      }
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

