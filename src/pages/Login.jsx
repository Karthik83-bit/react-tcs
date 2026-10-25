
import { useActionState } from "react";
import { actionTypes } from "../utils/action";
import { Link, useNavigate } from "react-router-dom";


export function Login(props) {
    const { dispatch } = props;
    const navigate = useNavigate()

    async function loginAction(previousState, formData) {
        const userName = formData.get("username");
        const password = formData.get("password");

        if (!userName || !password) {
            return { error: "Username and password are required" };
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch({ type: actionTypes.LOGGED_IN })
        navigate("/", { replace: true })

        return { error: "", success: "Login successful" };
    }
    const [state, formAction, isPending] = useActionState(
        loginAction, { error: "", success: "" }
    )
    return (
        <main className="login-page">
            <section className="login-card">
                <Link className="brand login-brand" to="/login">
                    <span className="brand-mark">M</span>
                    <span>Metricly</span>
                </Link>
                <p className="eyebrow">WELCOME BACK</p>
                <h1>Sign in to your account</h1>
                <p className="login-subtitle">Continue managing your product performance.</p>
                <form className="login-form" action={formAction}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" autoComplete="username" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" autoComplete="current-password" required />
                    <button className="primary-button" type="submit" disabled={isPending}>
                        {isPending ? "Signing in…" : "Sign in"}
                    </button>
                    {state.error && <p className="form-message error-message" role="alert">{state.error}</p>}
                </form>
                <p className="login-footnote">Secure access to your analytics workspace</p>
            </section>
        </main>
    );
}
