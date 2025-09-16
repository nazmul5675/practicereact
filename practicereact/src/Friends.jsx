import { use } from "react";
import Friend from "./Friend";

const Friends = ({ fetchFriends }) => {
    const friends = use(fetchFriends)
    return (
        <div className="card">
            <h3>Friends : {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;