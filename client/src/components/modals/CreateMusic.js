import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {createMusic, fetchBrands, fetchTypes} from "../../http/musicAPI";
import {observer} from "mobx-react-lite";

const CreateMusic = observer(({show, onHide}) => {
    const {music} = useContext(Context);
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [file, setFile] = useState(null);
    const [isFormValid, setIsFormValid] = useState(false);

    //юзэфект для поведения кнопки добавить
    useEffect(() => {
        // Check if all required fields are filled
        setIsFormValid(!!name && !!author && file && music.selectedBrand.id && music.selectedType.id);
    }, [name, author, file, music.selectedBrand.id, music.selectedType.id]);


    useEffect(() => {
        fetchTypes().then(data => music.setTypes(data));
        fetchBrands().then(data => music.setBrands(data));
    }, []);

    const selectFile = e => {
        setFile(e.target.files[0]);
    };

    const addDevice = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('author', author);
        formData.append('img', file);
        formData.append('brandId', music.selectedBrand.id);
        formData.append('typeId', music.selectedType.id);
        createMusic(formData).then(() => onHide());
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Добавить новую песню
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{music.selectedType.name || "Выберите жанр"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {music.types.map(type =>
                                <Dropdown.Item
                                    key={type.id}
                                    onClick={() => music.setSelectedType(type)}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{music.selectedBrand.name || "Выберите лейбл"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {music.brands.map(brand =>
                                <Dropdown.Item
                                    key={brand.id}
                                    onClick={() => music.setSelectedBrand(brand)}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Пожалуйста введите название трека"
                    />
                    <Form.Control
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                        className="mt-3"
                        placeholder="Пожалуйста укажите автора"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        accept=".jpg"
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addDevice} disabled={!isFormValid}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateMusic;
