import Link from "next/link";

export default function Sidebar() {

    const userOnline = [{
        id: 1, user_name: 'Thang Nguyen', avatar: 'https://placekitten.com/50/50',
    }, {
        id: 2, user_name: 'My Chat', avatar: 'https://placekitten.com/50/50',
    }]

    return (<>
            <div
                className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                <div className="mb-2 p-4">
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">Chat
                        Tailwind</h5>
                </div>
                <ul className="flex flex-col gap-1 min-w-[240px] font-sans text-base font-normal text-gray-700">
                    {userOnline.map((item, index) => (<>
                            <li role="button" key={item.id}
                                className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                                <Link href="#" className="grid place-items-center mr-4">
                                    <img className={'rounded-full'} src={item.avatar} alt={item.user_name}></img>
                                </Link>
                                {item.user_name}
                            </li>
                            <hr className={'bg-gray-200 border-spacing-1'}/>
                        </>))}
                </ul>
            </div>
        </>);
}