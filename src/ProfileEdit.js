import React, { useState, useEffect } from "react";

function ProfileEdit({ userID }) {  // Added `userID` as a prop
    const [user, setUser] = useState({});

    console.log("render", user);
    useEffect(() => {
        console.log("useEffect");
        setUser({});
        const abortController = new AbortController(); // Create a new `AbortController`
        // Special built-in object, the AbortController object can be used to abort not only fetch(), but other asynchronous tasks as well.

        async function loadUsers() {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${userID}`,
                    { signal: abortController.signal } // Pass the `AbortController` signal to `fetch()`
                );
                const userFromAPI = await response.json();
                setUser(userFromAPI);
            } catch (error) {
                if (error.name === "AbortError") {
                    // Ignore `AbortError`
                    console.log("Aborted", userID);
                } else {
                    throw error;
                }
            }
        }
        loadUsers();

        return () => {
            console.log("cleanup", userID);
            abortController.abort(); // Cancels any pending request or response
        }
    // }, []); // Passing [] so that it only runs the effect once
    }, [userID]); // <-- Added dependency on `userID`
    /*
    // Alternatively, here's a more concise syntax using the Promise interface:
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((response) => response.json())
            .then(setUser);
        }, []);
    */

    useEffect(() => {
        if (user.username) {
            document.title = `${user.username} : Edit Profile`;
        } else {
            document.title = "Edit Profile";
        }
    }, [user]); // Rerun this effect when the user changes

    const changeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${user.id}`,
            {
                method: "PUT",
                body: JSON.stringify(user),
                headers: {
                "Content-type": "application/json;charset=UTF-8"
                }
            }
        );
        const savedData = await response.json();
        console.log("Saved user!", savedData);
    };

    if (user.id) {
        return (
            <form name="profileEdit" onSubmit={submitHandler}>
                <div>
                <label htmlFor="username">User Name:</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    required={true}
                    value={user.username}
                    onChange={changeHandler}
                />
                </div>
                <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required={true}
                    value={user.email}
                    onChange={changeHandler}
                />
                </div>
                <button type="submit">Save</button>
            </form>
        );
    }
    return "Loading...";
}

export default ProfileEdit;
