import { auth } from "../config/firebase";

export default function User(){
    console.log(auth);
    return (
        <div>
            {/* <p>{auth?.currentUser?.displayName}</p>
            <p>{auth?.currentUser?.email}</p>
            <p>
                <img src={auth?.currentUser.photoURL} alt="" />
            </p> */}
        </div>
    )
}