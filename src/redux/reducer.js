// estado global

const initialState = { 
    myFavorites: [],
    allCharacters: []
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD_FAVORITE':
            let copy1 = state.allCharacters;
            copy1.push(payload);
            return { ...state, myFavorites: copy1, allCharacters: copy1 };

        case 'REMOVE_FAVORITE':
            let copy2 = state.myFavorites.filter((char) => {
            return char.id !== Number(payload);
        });
        return { ...state, myFavorites: copy2, allCharacters: copy2 };

        case 'FILTER':
            let copy3 = [...state.allCharacters];
            if(payload === 'all'){
                return { ...state, myFavorites: copy3 };
            } else {
                let filtro = [...state.allCharacters].filter((char) => {
                    return char.gender === payload
                });
                return { ...state, myFavorites: filtro };
            }

        case 'ORDER':
            let orden = [...state.allCharacters];
            
            let orderedChars = orden.sort((a,b) => {
                if(a.id > b.id){ //a.id = 5 b.id = 3  => b,a
                    return payload === 'Ascendente' ? 1 : -1
                } 
                else if (a.id < b.id){ // a.id = 6 b.id = 9 => b,a
                    return payload === 'Descendente' ? 1 : -1
                }
                else return 0;
            });
            return { ...state, myFavorites: orderedChars };

        default:
            return {...state}
    }
};

export default reducer;

