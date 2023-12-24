import Link from "next/link";

export default function Page(){
    return (
        <>
            <div id="content" role="main" className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
                <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-gray-800">Reset Password</h1>
                        </div>

                        <div className="mt-5">
                            <form>
                                <div className="grid gap-y-4">
                                    <div>
                                        <label htmlFor="password"
                                               className="block text-sm font-bold text-gray-800 ml-1 mb-2">New Password</label>
                                        <div className="relative">
                                            <input type="password" id="password" name="password"
                                                   className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                                   required aria-describedby="password-error"/>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="password_confirmation"
                                               className="block text-sm font-bold text-gray-800 ml-1 mb-2">Password Conformation</label>
                                        <div className="relative">
                                            <input type="password" id="password_confirmation" name="password_confirmation"
                                                   className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm"
                                                   required aria-describedby="email-error"/>
                                        </div>
                                    </div>
                                    <button type="submit"
                                            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 transition-all text-sm">Reset
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