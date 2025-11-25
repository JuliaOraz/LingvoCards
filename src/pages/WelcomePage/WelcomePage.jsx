import { NavLink } from "react-router-dom";

export default function Welcome() {

    return (
        <>
            <h1>Welcome to LingvoCards</h1>
            <h2>Добавляйте и изучайте слова на любом языке </h2>

            <NavLink to="/login" style={{ display: 'block', width: '100%', marginBottom: "20px" }}>Login</NavLink>
            <NavLink to="/register" style={{ display: 'block', width: '100%' }}>Register</NavLink>
        </>
    )
}