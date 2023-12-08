import axiosSecure from "."

//in db
export const saveUser = async user=>{
    const currentUser={
        email: user.email,
        role:'member',
        status:'Verified',
    }

    const {data} = await axiosSecure.put(`/user/${user?.email}`,currentUser)

    return data
}

//get token 
export const getToken = async email =>{

    const {data} = await axiosSecure.post(`/jwt`,email)
    console.log("token",data)
    return data

}

// remove token
export const clearCookie = async () =>{

    const {data} = await axiosSecure.get('/logout')
    return data

}

///get user role

export const getRole = async email =>{

    const {data} = await axiosSecure(`/user/${email}`)
    return data.role
}