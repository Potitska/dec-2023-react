import React, {useEffect, useState} from 'react';
import axios from "axios";
import user from "./User";
import User from "./User";

const Users = ({setUserId}) => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/users').then(value => value.data).then(value => setUsers(value))
    },[])
    return (
        <div>
            {users.map( user =><User key={user.id} user={user} setuserId={setUserId}/>)}
        </div>
    );
};

export default Users;