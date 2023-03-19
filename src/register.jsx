import React, { useState } from 'react'

const Register = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    return (
        <div className="bg-blue-50 h-screen flex items-center">
            <form className='w-64 mx-auto'>
                <input value={username} onChange={(e) => { setusername(e.target.value) }} type="text" className="block w-full rounded-sm p-2 mb-2 border" placeholder='username' />
                <input value={password} onChange={(e) => { setpassword(e.target.value) }} type="password" className="block w-full rounded-sm p-2 mb-2 border" placeholder='passsword' />
                <button className="block bg-blue-500 text-white rounded-sm w-full p-2">Register</button>
            </form>
        </div>
    )
}

export default Register