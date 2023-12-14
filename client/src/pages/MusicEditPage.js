import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Dropdown, Form, Image, Modal, Row} from "react-bootstrap";
import {useParams, useNavigate} from 'react-router-dom';
import {fetchDeleteMusic, fetchOneMusic, updateMusics} from "../http/musicAPI";
import {Context} from "../index";
import {ADMIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";


const MusicEditPage = observer(() => {
    const {music} = useContext(Context);
    const {id} = useParams();
    const [musicCurr, setMusicCurr] = useState({});
    const [showMsg, setShowMsg] = useState(false);
    const [msg, setMsg] = useState("");

    const [selectBrand, setSelectBrand] = useState({});
    const [selectType, setSelectType] = useState({});
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [img, setImg] = useState("");
    const [imgFile, setImgFile] = useState(null);

    const [isDisabledPutBtn, setDisabledPutBtn] = useState(true);
    const navigate = useNavigate()

    const deleteMusic = () => {
        fetchDeleteMusic(id).then(() => {
            navigate(ADMIN_ROUTE); // Use navigate directly inside the function
        });
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const imgHandler = e => {
        e.preventDefault();

        const reader = new FileReader();
        reader.onload = () => {
            setImg(reader.result.toString());
        };
        reader.readAsDataURL(e.target.files[0]);
        setImgFile(e.target.files[0]);
    }

    const putMusic = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('author', author);
        formData.append('img', imgFile);
        formData.append('brandId', selectBrand.id);
        formData.append('typeId', selectType.id);
        updateMusics(id, formData).then(data => {
            setShowMsg(true);
            setMsg(data);
            setTimeout(() => setShowMsg(true), 5000)
        });
    }

    useEffect(() => {


        if(musicCurr && musicCurr.brand && musicCurr.type) {
            if(musicCurr.brand.name !== selectBrand.name ||
                musicCurr.type.name !== selectType.name ||
                musicCurr.name !== name ||
                musicCurr.author !== author ||
                img
            ) {
                setDisabledPutBtn(false);
            } else {
                setDisabledPutBtn(true);
            }
        }
    }, [name, selectBrand, selectType, author, img]);

    useEffect(() => {
        fetchOneMusic(id).then(data => {
            setMusicCurr(data);
            setSelectBrand(data.brand);
            setSelectType(data.type);
            setName(data.name);
            setAuthor(data.author);
        });
    }, [id]);

    return (
        <Container className="mt-3">
            <Row>
                <Col xs={12}>
                    {/*Brand*/}
                    <Row>
                        <Col xs={1} className="d-flex align-items-center text-success">
                            Лейбл:
                        </Col>
                        <Col xs={11}>
                            <Dropdown className="mt-2 mb-2">
                                <Dropdown.Toggle>{selectBrand.name || "Choose Brand"}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {music.brands.map(brand => {
                                        return brand.name === selectBrand?.name ?
                                            <Dropdown.Item
                                                key={brand.id}
                                                disabled
                                            >
                                                {brand.name}
                                            </Dropdown.Item>
                                            :
                                            <Dropdown.Item
                                                key={brand.id}
                                                onClick={() => setSelectBrand(brand)}
                                            >
                                                {brand.name}
                                            </Dropdown.Item>

                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    {/*Type*/}
                    <Row>
                        <Col xs={1} className="d-flex align-items-center text-success">
                            Жанр:
                        </Col>
                        <Col xs={11}>
                            <Dropdown className="mt-2 mb-2">
                                <Dropdown.Toggle>{selectType?.name || "Choose Type"}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {music.types.map(type => {
                                        return type.name === selectType?.name ?
                                            <Dropdown.Item
                                                key={type.id}
                                                disabled
                                            >
                                                {type.name}
                                            </Dropdown.Item>
                                            :
                                            <Dropdown.Item
                                                key={type.id}
                                                onClick={() => setSelectType(type)}
                                            >
                                                {type.name}
                                            </Dropdown.Item>

                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    {/*Name*/}
                    <Row>
                        <Col xs={1} className="d-flex align-items-center text-success">
                            Название:
                        </Col>
                        <Col xs={8}>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Col>
                        <Col xs={3} className="d-flex align-items-center">
                            {name.length === 0 && <b style={{color: "red"}}>Пожалуйста, введите название трека</b>}
                        </Col>
                    </Row>
                    {/*Name*/}
                    <Row className="mt-2">
                        <Col xs={1} className="d-flex align-items-center text-success">
                            Автор:
                        </Col>
                        <Col xs={8}>
                            <Form.Control
                                value={author}
                                onChange={e => setAuthor(e.target.value)}
                            />
                        </Col>
                        <Col xs={3} className="d-flex align-items-center">
                            {author.length === 0 && <b style={{color: "red"}}>Пожалуйста, укажите автора трека</b>}
                        </Col>
                    </Row>

                    {/*Name*/}
                    <Row className="mt-4">
                        <Col xs={3} className="d-flex flex-column justify-content-center text-center text-success">
                             Текущая обложка: <br/>
                            <Image style={{margin: "0 auto", marginTop: 15}} width={150} src={process.env.REACT_APP_API_URL + musicCurr.img}/>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col xs={12}>
                            {<Button onClick={putMusic} variant="outline-success">Обновить информацию</Button>}
                            <Button className="ml-5" variant="outline-danger" onClick={handleShow}>Удалить трек</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete this device {musicCurr.id}?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={deleteMusic}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
});

export default MusicEditPage;

