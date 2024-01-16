'use client';

import {Button, Modal} from 'flowbite-react';
import {useState} from 'react';

export default function Profile() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className={'mr-0 w-1/2 grid justify-items-end'}>
                <Button className={'bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mr-0'}
                        onClick={() => setOpenModal(true)}>Chat Name</Button>
                <Modal className={'w-1/2 ml-auto'} show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>Terms of Service</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6 p-5">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                With less than a month to go before the European Union enacts new consumer privacy laws
                                for its citizens,
                                companies around the world are updating their terms of service agreements to comply.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on
                                May 25 and is meant
                                to ensure a common set of data rights in the European Union. It requires organizations
                                to notify users as
                                soon as possible of high-risk data breaches that could personally affect them.
                            </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className={'mx-auto'}>
                        <Button className={'bg-blue-600 font-bold mr-2'} onClick={() => setOpenModal(false)}>I accept</Button>
                        <Button color="gray" onClick={() => setOpenModal(false)}>
                            Decline
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
    );
}
