import { useNavigate } from "react-router-dom"
import { auth, provide } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
    const navigate = useNavigate();

    const login = async () => {
        const result = await signInWithPopup(auth, provide);
        console.log(result);
    // 登入成功後切換到首頁
        navigate('/user');
    }
    return (
        <div>
            <button onClick={login}>登入</button>
        </div>
    )
}