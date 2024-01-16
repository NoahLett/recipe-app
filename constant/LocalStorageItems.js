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

export const getCheckedItems = () => {
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem('checkbox'))
    }
}

export const saveCheckedItems = (checkbox) => {
    localStorage.setItem('checkbox', JSON.stringify(checkbox))
    return
}