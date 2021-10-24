import React, {useEffect} from 'react';
import {Button, Modal, Position, Scroll, Size} from "@transferwise/components";

const Tutorial = () => {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

    useEffect(() => {
        const value = window.localStorage.getItem('showTutorial');
        if (!value) {
            setOpen(true);
        }
    }, []);
    return (
        <div>
            <Modal
                body={
                    <>
                        <div>
                            <ul>
                                <li>Select the right transaction type.</li>
                                <li>Transfer: one time transaction with a selected due date</li>
                                <li>Recurring payment: Monthly or weekly scheduled transfer to a target currency</li>
                            </ul>
                        </div>
                    </>
                }
                open={open}
                scroll={Scroll.CONTENT}
                position={Position.TOP}
                onClose={() => setOpen(false)}
                size={Size.MEDIUM}
                title="Tutorial"
                className=""
                footer={
                    <Button block onClick={() => {
                        setOpen(false);
                        setOpen2(true);
                    }}>
                        Close
                    </Button>
                }
            />
            <Modal
                body={
                    <>
                        <ul>
                            <li>Set up due date to be sure you will not run out of time</li>
                            <li>Activate Smart conversion mechanism to find interval maximum</li>
                            <li>Check out the graph about the predicted information</li>
                        </ul>
                    </>
                }
                open={open2}
                scroll={Scroll.CONTENT}
                position={Position.TOP}
                onClose={() => setOpen2(false)}
                size={Size.MEDIUM}
                title="Tutorial"
                className=""
                footer={
                    <Button block onClick={() => {
                        setOpen2(false);
                        setOpen3(true);
                    }}>
                        Close
                    </Button>
                }
            />
            <Modal
                body={
                    <>
                        <ul>
                            <li>You can check the expected expiration rate</li>
                            <li>Set the target currency and amount</li>
                            <li>Place your mart order on Wise</li>
                        </ul>
                    </>
                }
                open={open3}
                scroll={Scroll.CONTENT}
                position={Position.TOP}
                onClose={() => setOpen3(false)}
                size={Size.MEDIUM}
                title="Tutorial"
                className=""
                footer={
                    <Button block onClick={() => {
                        setOpen3(false)
                        window.localStorage.setItem("showTutorial", "true");
                    }}>
                        Close
                    </Button>
                }
            />
        </div>
    );
};

export default Tutorial;