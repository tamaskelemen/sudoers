import React, {useEffect} from 'react';
import {Button, Modal, Position, Scroll, Size} from "@transferwise/components";

const Tutorial = () => {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);

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
                                <p className="m-t-4">
                                    <li>Select the right transaction type.</li>
                                    <li>Transfer: one time transaction with a selected due date</li>
                                    <li>Recurring payment: Monthly or weekly scheduled transfer to a target currency</li>
                                </p>
                            </ul>
                        </div>
                    </>
                }
                open={open}
                scroll={Scroll.CONTENT}
                position={Position.CENTER}
                onClose={() => setOpen(false)}
                size={Size.MEDIUM}
                title="How to use it, step 1/4."
                className=""
                footer={
                    <Button block onClick={() => {
                        setOpen(false);
                        setOpen2(true);
                    }}>
                        Next
                    </Button>
                }
            />
            <Modal
                body={
                    <>
                        <ul>
                            <p className="m-t-4">
                                <li>Set up due date to be sure you will not run out of time</li>
                                <li>Activate Smart conversion mechanism to find interval maximum</li>
                                <li>Check out the graph about the predicted information</li>
                            </p>
                        </ul>
                    </>
                }
                open={open2}
                scroll={Scroll.CONTENT}
                position={Position.CENTER}
                onClose={() => setOpen2(false)}
                size={Size.MEDIUM}
                title="How to use it, step 2/4."
                className=""
                footer={
                    <Button block onClick={() => {
                        setOpen2(false);
                        setOpen3(true);
                    }}>
                        Next
                    </Button>
                }
            />
            <Modal
                body={
                    <>
                        <ul>
                            <p className="m-t-4">
                                <li>You can check the expected expiration rate</li>
                                <li>Set the target currency and amount</li>
                                <li>Place your mart order on Wise</li>
                            </p>
                        </ul>
                    </>
                }
                open={open3}
                scroll={Scroll.CONTENT}
                position={Position.CENTER}
                onClose={() => setOpen3(false)}
                size={Size.MEDIUM}
                title="How to use it, step 3/4."
                className=""
                footer={
                    <Button block onClick={() => {
                        setOpen3(false);
                        setOpen4(true)
                    }}>
                        Next
                    </Button>
                }
            />
            <Modal
                body={
                    <>
                        <ul>
                            <p className="m-t-4">
                                Last but not least, here we implemented a time machine in our system     to show the result of this flow in our limited demo.
                                This time machine takes us to the due date to check what happened during this period.
                                Here we can see our loss or win with the  automatic transaction
                                compared to a normal bank exchange and compared to an on due date change at Wise.
                            </p>
                        </ul>
                    </>
                }
                open={open4}
                scroll={Scroll.CONTENT}
                position={Position.CENTER}
                onClose={() => setOpen4(false)}
                size={Size.MEDIUM}
                title="How to use it, step 4/4."
                className=""
                footer={
                    <Button block onClick={() => {
                        setOpen4(false)
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