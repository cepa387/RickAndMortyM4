export const addFav = (character) => {
    return {
        type: 'ADD_FAVORITE',
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: 'REMOVE_FAVORITE',
        payload: id
    }
}

export const filterCards = (gender) => {
    return {
        type: 'FILTER',
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: 'ORDER',
        payload: order
    }
}

