import { useState } from "react";



function Login({handleLogin}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
    
        handleLogin(email,password);
        setEmail('')
        setPassword('')

    }

    return (
        <div className="flex justify-center items-center w-full h-screen bg-black">
            <div className="w-96 p-6 bg-[#1c1c1c] rounded-lg shadow-lg">
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
                            className='text-sm py-2 px-2 w-4/5 rounded-full outline-none bg-transparent border-[1px] border-gray-400 '
                            placeholder='Enter your Email'
                            required
                        />
                    

                    <input type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }
                        }
                        className='text-sm py-2 px-2 w-4/5 rounded-full outline-none bg-transparent border-[1px] border-gray-400'
                        placeholder='Enter the Password'
                        required
                    />

                    <button
                        className=' bg-emerald-500 py-3  hover:bg-emerald-600 px-25 rounded-full text-sm mt-4'
                    >Log In</button>
                </form>

            </div>
        </div>
    )
}

export default Login
