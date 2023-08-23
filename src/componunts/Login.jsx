/* eslint-disable react/no-unescaped-entities */
const Login = ()=>{
    return (
        <div className=" nav flex bg-white absolute z-10 w-[700px] h-[550px] top-[200px] left-[450px] border-r">
            <div className=" bg-[url('Login.png')] bg-contain bg-no-repeat text-left p-10 flex flex-col w-[300px] ">
                <span className="text-4xl font-semibold text-white">Login</span>
                <span className="text-slate-200 text-md mt-4">Get access to your <br /> Orders,  Wishlist and <br /> Recommendations</span>
            </div>

            <div className="flex flex-col p-8 gap-4 ">

                <input className="border-none placeholder:text-slate-400 focus:border-none outline-none  focus:text-slate-400" type="text" placeholder="Enter Email/Mobile Number"
                autoComplete="off"/>
                <hr className="border -mt-2.5"/>

                <span className="text-left mt-8 text-sm text-slate-400">By continuing, you agree to Flipkart's <span className="text-blue-600">Terms of Uses</span> and <span className="text-blue-600">Privacy Policy.</span> </span>

                <a href="#" className="border-2 text-white font-medium bg-orange-500 p-3 text-center w-full m-0">Request OTP</a>

                <a href="#" className="absolute bottom-8 left-1/2 text-blue-600">New to Flipkart? Create an account</a>
            </div>

        </div>
    );
}

export default Login;