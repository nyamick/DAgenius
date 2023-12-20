import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createBrand } from '../../http/musicAPI';


const CreateBrand = ({ show, onHide }) => {

    const [value, setValue] = useState('');
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        // Функция, которая будет вызвана при изменении состояния update
        const reloadPage = () => {
            window.location.reload();
        };

        // Подписываемся на изменения состояния update
        if (update) {
            reloadPage();
        }

        // Отписываемся от событий при размонтировании компонента

    }, [update]);

    const addBrand = () => {
        createBrand({ name: value }).then(() => {
            setValue('');
            onHide();

            // Изменяем состояние, чтобы обновить компонент
            setUpdate(prevUpdate => !prevUpdate);
        });
    };

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Add new Brand</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder="Input name your brand..."
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Close
                </Button>
                <Button variant="outline-success" onClick={() => addBrand()}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
