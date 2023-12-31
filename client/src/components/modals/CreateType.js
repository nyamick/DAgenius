import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createType } from '../../http/musicAPI';

const CreateType = ({ show, onHide }) => {
    const [value, setValue] = useState('');
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        const reloadPage = () => {
            window.location.reload();
        };

        if (update) {
            reloadPage();
        }

    }, [update]);

    const addType = () => {
        createType({ name: value }).then(() => {
            setValue('');
            onHide();
            setUpdate(prevUpdate => !prevUpdate);
        });
    };

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Add new Type</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder="Input name your type..."
                        onChange={e => setValue(e.target.value)}
                        value={value}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Close
                </Button>
                <Button variant="outline-success" onClick={addType}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
