export const petIncrement = (number) => {
    return{
        type: "PET_INCREMENT",
        payload: number
    }
}

export const petDecrement = (number) => {
    return{
        type: "PET_DECREMENT",
        payload: number
    }
}

export const getUsers = () => {
    return{
        type: "GET_USER_REQUEST"
    }
}