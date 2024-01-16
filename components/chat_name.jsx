import ProfileMenu from "@/components/profile_menu";

export default function ChatName() {
    return (
        <div className="flex p-4 ml-5 overflow-y-auto border-b border-gray-300">
            <div className={'w-1/2'}>Chat Name</div>
            <ProfileMenu></ProfileMenu>
        </div>
    );
}