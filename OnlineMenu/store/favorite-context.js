import { createContext, useState } from "react";

export const FavoriteContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { }
});

function FavoriteContextProvider({ children }) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite(id) {
        setFavoriteMealIds(prevIds => [...prevIds, id])
    }

    function removeFavorite(removedId) {
        setFavoriteMealIds(prevIds => prevIds.filter(id => id !== removedId))
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite
    }

    return <FavoriteContext.Provider value={value}>
        {children}
    </FavoriteContext.Provider>
};

export default FavoriteContextProvider;

