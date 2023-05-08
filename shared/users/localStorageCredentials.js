
export const update = (username, token) => {
    if(localStorage){
        localStorage.setItem("username",username)
        localStorage.setItem("token",token)
    }
    else
        return false
    return true
}

export const get = () => {
    const credentials = {
        username : localStorage.getItem("username"),
        token : localStorage.getItem("token")
    }
    if(credentials.username == null || credentials.token == null)
        return undefined
    return credentials
}

export const clear = () => {
    localStorage.removeItem("username")
    localStorage.removeItem("token")
} 