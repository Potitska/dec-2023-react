import User from "../user/User";
function Users({xxx: users}) {

    return (
        <div>
            {
                users.map(value => (<User item={value}/>))
            }
        </div>
    );
}

export default Users;