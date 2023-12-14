import React, {useEffect, useState} from 'react';
import {
    Button,
    Col,
    Container,
    Dropdown,
    Form,
    Image,
    InputGroup,
    ListGroup,
    Pagination,
    Row
} from "react-bootstrap";

import CreateMusic from "../components/modals/CreateMusic";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import {getAllMusicsInAdminPage} from "../http/musicAPI";
import {NavLink} from "react-router-dom";
import {DEVICE_EDIT_ROUTE} from "../utils/consts";
import DeleteBrandOrType from "../components/modals/DeleteBrandOrType";
import {text} from "@fortawesome/fontawesome-svg-core";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [musicVisible, setMusicVisible] = useState(false);
    const [deleteBrandOrType, setDeleteBrandOrType] = useState(false);

    const [searchMusic, setSearchMusic] = useState('');
    const [searchedMusic, setSearchedMusic] = useState([]);
    const [filter, setFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(1);

    const [successMsg, setSuccessMsg] = useState('');
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);

    //pagination
    const limit = 5;
    const pageCount = Math.ceil(Number(count) / limit);
    const pages = [];
    for (let number = 1; number < pageCount + 1; number++) {
        pages.push(
            <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
                {number}
            </Pagination.Item>
        );
    }


    useEffect(() => {
        getAllMusicsInAdminPage(searchMusic, currentPage, filter).then(({count, rows}) => {
            setSearchedMusic(rows);
            setCount(count)
        })
    }, [currentPage])

    useEffect(() => {
        getAllMusicsInAdminPage(searchMusic, 1, filter).then(({count, rows}) => {
            setSearchedMusic(rows);
            setCount(count);
            setCurrentPage(1);
        })
    }, [filter, successMsg])


    const fetchMusic = () => {
        getAllMusicsInAdminPage(searchMusic, currentPage, filter).then(({count, rows}) => {
            setSearchedMusic(rows);
            setCount(count)
        })
    };

    const showSuccessMsgFunc = (msg) => {
        setSuccessMsg(msg);
        setShowSuccessMsg(true);
        setTimeout(() => setShowSuccessMsg(false), 5000);
    }

    return (
        <Container className="d-flex flex-column">
            {showSuccessMsg && <p>{successMsg}</p>}
            <Button
                onClick={() => setTypeVisible(true)}
                variant="outline-success"
                className="mt-4 p-2"
            >
                Добавить жанр
            </Button>
            <Button
                onClick={() => setBrandVisible(true)}
                variant="outline-success"
                className="mt-4 p-2"
            >
                Добавить лейбл
            </Button>
            <Button
                onClick={() => setMusicVisible(true)}
                variant="outline-success"
                className="mt-4 p-2"
            >
                Добавить трек
            </Button>
            <Button
                onClick={() => setDeleteBrandOrType(true)}
                variant="outline-danger"
                className="mt-4 p-2"
            >
                Удалить жанр или лейбл
            </Button>
            <CreateMusic show={musicVisible} onHide={() => setMusicVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <DeleteBrandOrType show={deleteBrandOrType} onHide={() => setDeleteBrandOrType(false)} showSuccessMsgFunc={showSuccessMsgFunc}/>

            <Dropdown className="mt-5 mb-3" style={{margin: "0 auto"}}>
                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                    {filter}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {filter === "All" ? <Dropdown.Item disabled>All</Dropdown.Item> : <Dropdown.Item onClick={() => setFilter("All")}>All</Dropdown.Item>}
                    {filter === "Without Brand or Type" ? <Dropdown.Item disabled>Without Brand or Type</Dropdown.Item> : <Dropdown.Item onClick={() => setFilter("Without Brand or Type")}>Without Brand or Type</Dropdown.Item>}
                </Dropdown.Menu>
            </Dropdown>



            <ListGroup>
                {searchedMusic && searchedMusic.map( ({id, img, brand, type, author, name}) => {
                    return (
                        <ListGroup.Item className="mt-3" key={id}>
                            <Row>
                                <Col xs={2}>
                                    <Image width={150} src={process.env.REACT_APP_API_URL + img}/>
                                </Col>
                                <Col xs={8}>

                                    <Row>
                                        <Col xs={12}>
                                            Name: {name}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            Price: {author}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            Brand: {brand?.name}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            Type: {type?.name}
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={2}>
                                    <NavLink to={DEVICE_EDIT_ROUTE + `/${id}`} style={{fontSize: 32}}>Edit</NavLink>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )
                })}
            </ListGroup>
        </Container>
    );
};

export default Admin;
