import React from 'react';
import {Row, Col, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import tshort from '../assets/tshort.png'

const Contacts = observer(() => {
    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center mb-2 mt-2">
                <h1>Размеры футболок</h1>
            </Row>
            <Row>
                <Col xs={4}>
                    <img src={tshort} alt={"tshort"}/>
                </Col>
                <Col>
                    <table className="table table-sm">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">S</th>
                        <th scope="col">M</th>
                        <th scope="col">L</th>
                        <th scope="col">XL</th>
                        <th scope="col">XXL</th>
                        <th scope="col">XXXL</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">width</th>
                        <td>44,0</td>
                        <td>47,0</td>
                        <td>50,0</td>
                        <td>53,0</td>
                        <td>56,0</td>
                        <td>60,0</td>
                    </tr>
                    <tr>
                        <th scope="row">length</th>
                        <td>70,0</td>
                        <td>72,0</td>
                        <td>74,0</td>
                        <td>76,0</td>
                        <td>78,0</td>
                        <td>80,0</td>
                    </tr>
                    </tbody>
                </table>
                </Col>

            </Row>
            <Row className="d-flex justify-content-center align-items-center mb-2">
                <h1>Размеры худи</h1>
            </Row>
            <Row>
                <Col xs={4}>
                    <img src={tshort} alt={"tshort"}/>
                </Col>
                <Col>
                    <table className="table table-sm">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">S</th>
                            <th scope="col">M</th>
                            <th scope="col">L</th>
                            <th scope="col">XL</th>
                            <th scope="col">XXL</th>
                            <th scope="col">XXXL</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">width</th>
                            <td>44,0</td>
                            <td>47,0</td>
                            <td>50,0</td>
                            <td>53,0</td>
                            <td>56,0</td>
                            <td>60,0</td>
                        </tr>
                        <tr>
                            <th scope="row">length</th>
                            <td>70,0</td>
                            <td>72,0</td>
                            <td>74,0</td>
                            <td>76,0</td>
                            <td>78,0</td>
                            <td>80,0</td>
                        </tr>
                        </tbody>
                    </table>
                </Col>

            </Row>
        </Container>
    );
});

export default Contacts;
