import React, { createContext, useState } from 'react'
import { Data } from '../constants/utils'

export const FavoriteContext = createContext()

const getFavorite = () => {
    let cart = {}
    for (let i = 1; i < Data.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

export const FavoriteProvider = ({ children }) => {
    const [favorite, setFavorite] = useState(getFavorite())

    const addToFavorite = (itemId) => {
        setFavorite((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))

        alert('added to favorites!')
    }

    const removeFavorite = (itemId) => {
        setFavorite((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))

        alert('removed from favorites!')
    }


    return (
        <FavoriteContext.Provider value={{ addToFavorite, removeFavorite, favorite }}>
            {children}
        </FavoriteContext.Provider>
    )
}