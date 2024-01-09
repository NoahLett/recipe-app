'use client'

export const getShoppingList = () => {
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem('shoppingList'))
    }
}

export const saveShoppingList = (shoppingList) => {
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList))
    return
}