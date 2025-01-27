import { useState } from "react";


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(`Email : "${email}" and Password : "${password}"`);
        alert(`Email : "${email}" and Password : "${password}"`)

        setEmail('')
        setPassword('')

    }

    return (
        <div className="flex justify-center items-center w-full h-screen bg-slate-700">
            <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
                <form
                    onSubmit={
                        (e) => {
                            submitHandler(e)
                        }}
                    className='flex flex-col items-center justify-center gap-5 p-5'>
                    <input type="email"
                    value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }
                        }
                        className='border-2 border-emerald-600 rounded-full px-3 py-2 text-xl text-black outline-none '
                        placeholder='Enter your Email'
                        required
                    />

                    <input type="password"
                    value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }
                        }
                        className='border-2 border-emerald-600 rounded-full px-3 py-2 text-xl text-black outline-none'
                        placeholder='Enter the Password'
                        required
                    />

                    <button
                        className=' bg-emerald-600 rounded-full px-24 py-2 text-xl text-black outline-none'
                    >Log In</button>
                </form>

            </div>
        </div>
    )
}

export default Login
