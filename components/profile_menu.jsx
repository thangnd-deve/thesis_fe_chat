import {Dropdown} from "flowbite-react";
import {useState} from "react";

export default function ProfileMenu() {

    const [openModal, setOpenModal] = useState(false);
    return (<>
        <div className={'mr-0 w-1/2 grid justify-items-end'}>
            <Dropdown style={{color: 'text-blue-600'}} onClose={() => setOpenModal(openModal)} label="Chat Name"
                      dismissOnClick={false}>
                {!openModal && (
                    <>
                    <Dropdown.Item className="text-blue-600">Dashboard</Dropdown.Item>
                    <Dropdown.Item className="text-blue-600">Settings</Dropdown.Item>
                    <Dropdown.Item className="text-blue-600">Earnings</Dropdown.Item>
                    <Dropdown.Item className="text-blue-600">Earnings</Dropdown.Item>
                    <Dropdown.Item className="text-blue-600">Sign out</Dropdown.Item>
                    </>
                )}
            </Dropdown>
        </div>
    </>)
}