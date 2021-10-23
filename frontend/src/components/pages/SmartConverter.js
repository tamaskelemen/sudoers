import React from 'react';
import Navigation from '../navigation/Navigation';
import Form from "./Form";
import {Tabs} from "@transferwise/components";

const SmartConverter = () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        <Navigation>
            <Tabs
                className="tabs-custom-class"
                name="tabs-docs"
                tabs={[
                    {
                        title: 'Transfer',
                        disabled: false,
                        content: (
                            <Form />
                        ),
                    },
                    {
                        title: 'Recurring Payment',
                        disabled: false,
                        content: (
                            <Form />
                        ),
                    },
                ]}
                selected={open}
                onTabSelect={(index) => setOpen(index)}
            />
        </Navigation>
      </div>
    );
};

SmartConverter.propTypes = {};

export default SmartConverter;