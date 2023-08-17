// the url for our backend server
import { baseUrl } from "./base_url";
// function allows use to redirect to other routes
import { redirect } from "react-router-dom";

export const createAction = async ({request}) => {
    // get the data from the form in the request
    const formData = await request.formData()
    // setup the object for our new person
    const newPerson = {
        name: formData.get('name'),
        image: formData.get('image'),
        title: formData.get('title')
    }
    // send the new person to our backend API
    await fetch(`${baseUrl}/people`, {
        // tell fetch to make a post request
        method: 'POST',
        credentials: 'include',
        headers: {
            // tells our backend the data is JSON
            "Content-Type": "application/json"
        },
        // send the json string of the newPerson object
        body: JSON.stringify(newPerson)
    })

    // redirect the user back to the frontend index route
    return redirect('/dashboard')
}

export const updateAction = async ({request, params}) => {
    // grab the id from the params
    const id = params.id
    // console.log("this is the id", id)
    // grab the data from the form
    const formData = await request.formData()
    // build out the updated person
    const updatedPerson = {
        name: formData.get('name'),
        image: formData.get('image'),
        title: formData.get('title')
    }
    console.log("UPDATED PERSON HERE", updatedPerson)
    // send the updated person to our backend API
    await fetch(`${baseUrl}/people/${id}`, {
        // tell fetch to make a put request
        method: 'PUT',
        credentials: 'include',
        // teel backend the data is JSON
        headers: {
            "Content-Type" : "application/json"
        },
        // send the json string of the updatedPerson object
        body: JSON.stringify(updatedPerson)
    })
    // redirect back to show page frontend route
    return redirect(`/${id}`)
}

export const deleteAction = async ({params}) => {
    // grab the id from the params
    const id = params.id
    // send a delete request to our backend API
    await fetch(`${baseUrl}/people/${id}`, {
        // tell fetch to make a delete request
        method: 'DELETE',
        credentials: 'include'
        // no headers or body required for delete requests
    })
    // redirect back to the frontend index route
    return redirect('/dashboard')
}

export const signupAction = async ({request}) => {
    // get the form data
    const formData = await request.formData();
    // build out our new user
    const newUser = {
        username: formData.get('username'),
        password: formData.get('password')
    }
    //send the new user to our backend api
    const response = await fetch(`${baseUrl}/signup`, {
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
    body: JSON.stringify(newUser)
    })

    //check if status is 400 or more
    if (response.status >= 400){
        // alert the deatails of the error
        alert(response.statusText)
        return redirect("/signup")
    }
    // error 1100 usually means Schema problem (problem with username)
    
    return redirect("/login")
}

export const loginAction = async ({request}) => {
    // grab form data
    const formData = await request.formData();
    // build out the user
    const user = {
        username: formData.get('username'),
        password: formData.get('password')
    }
    // send the user to our backend api
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        credentials: "include",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(user)
    })

    //check if status is 400 or more
    if (response.status >= 400){
        // alert the deatails of the error
        alert(response.statusText)
        return redirect("/login")
    }
    // error 1100 usually means Schema problem (problem with username)

    // store whether loggedIn in localStorage
    localStorage.setItem('loggedIn', JSON.stringify({status: true}))

    // return redirect('/')
    // redirect back to the frontend index route
    return redirect('/dashboard')
}

