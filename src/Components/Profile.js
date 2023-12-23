// Profile.js
import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser) {
            // Fetch user details using stored id
            fetch(`https://dummyjson.com/users/${storedUser.id}`)
                .then((res) => res.json())
                .then((userData) => {
                    // Save user details in local storage
                    localStorage.setItem('user', JSON.stringify(userData));
                    setUser(userData);
                })
                .catch((error) => console.error('Error fetching user details:', error));
        }
    }, []);

    return (
        <div>
            <h1>Profile Page</h1>
            {user && (
                <div>
                    <p>ID: {user.id}</p>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    {/* Display other user information */}
                </div>
            )}
        </div>
    );
};

export default Profile;
