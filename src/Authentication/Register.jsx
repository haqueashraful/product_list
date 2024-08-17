import { useContext, useState } from 'react';
import { AuthContext } from '../Context/MyContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {createAccountWithEmailAndPassword, signInWithGoogle, setUser} = useContext(AuthContext);

    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        createAccountWithEmailAndPassword({ name, email, password })
            .then((userCredential) => {
                navigate('/');
            })
        console.log({ name, email, password });
    };

    const handleGoogleSignIn = () => {
        // Handle Google Sign-In logic here
        signInWithGoogle()
        .then((userCredential) => {
            setUser(userCredential.user);
        })
        console.log("Google Sign-In triggered");
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                        Register
                    </button>
                </form>
                <div className="text-center mt-6">
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors flex items-center justify-center"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                        >
                            <path
                                fill="#EA4335"
                                d="M24 9.5c3.15 0 5.9 1.15 8.1 3.05l6-6c-4.15-3.9-9.65-6.4-14.1-6.4C13.35 0 4.95 7.65 2 18.4l6.95 5.4C10.55 16.15 16.7 9.5 24 9.5z"
                            />
                            <path
                                fill="#34A853"
                                d="M46.8 24.55c0-1.85-.15-3.2-.5-4.6H24v9.55h12.85c-.65 3.4-2.55 6.3-5.55 8.3l8.45 6.5c5-4.6 7.85-11.3 7.85-19.75z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M10.1 28.9c-.4 1.25-.65 2.6-.65 4 0 2.65 1.15 5.15 2.95 7.15l8.5-6.55c-1.3-.4-2.35-1.2-3-2.3z"
                            />
                            <path
                                fill="#4285F4"
                                d="M24 46c5.85 0 10.75-2.1 14.35-5.8l-8.45-6.5c-2.3 1.55-5.3 2.45-8.4 2.45-7.3 0-13.55-5.05-15.75-12.1l-7 5.4c4.1 8.05 12.4 13.6 21.25 13.6z"
                            />
                        </svg>
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
