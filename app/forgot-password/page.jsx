import Link from "next/link";

export default function Page(){
    return (
        <>
            <div id="content" role="main" className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
                <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-gray-800">Forgot password?</h1>
                            <p className="mt-2 text-sm text-gray-800">
                                Remember your password?
                                <Link className="mx-2 text-blue-600 decoration-2 hover:underline font-medium" href={'/login'}>
                                    Login here
                                </Link>
                            </p>
                        </div>

                        <div className="mt-5">
                            <form>
                                <div className="grid gap-y-4">
                                    <div>
                                        <label htmlFor="email"
                                               className="block text-sm font-bold text-gray-800 ml-1 mb-2">Email
                                            address</label>
                                        <div className="relative">
                                            <input type="email" id="email" name="email"
                                                   className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                                   required aria-describedby="email-error"/>
                                        </div>
                                        <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include
                                            a valid email address so we can get back to you</p>
                                    </div>
                                    <button type="submit"
                                            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">Reset
                                        password
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}