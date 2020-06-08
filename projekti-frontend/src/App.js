import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Components/Modals/Modal'
import DataTable from './Components/Tables/DataTable'
import { CSVLink } from "react-csv"

class App extends Component {
    state = {
        items: []
    }

    getItems() {
        fetch('http://localhost:3000/crud')
            .then(response => response.json())
            .then(items => this.setState({items}))
            .catch(err => console.log(err))
    }

    addItemToState = (item) => {
        this.setState(prevState => ({
            items: [...prevState.items, item]
        }))
    }

    updateState = (item) => {
        const itemIndex = this.state.items.findIndex(data => data.id === item.id)
        const newArray = [
            ...this.state.items.slice(0, itemIndex),
            item,
            ...this.state.items.slice(itemIndex + 1)
        ]
        this.setState({ items: newArray })
    }

    deleteItemFromState = (id) => {
        const updatedItems = this.state.items.filter(item => item.id !== id)
        this.setState({ items: updatedItems })
    }

    componentDidMount() {
        this.getItems()
    }

    render() {
        return (
            <>
            <Container className="App">
                <Row>
                    <Col>
                        <h1 style={{ margin: "20px 0" }}>Projekti</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CSVLink
                            filename={"db.csv"}
                            color="primary"
                            style={{ float: "left", marginRight: "10px" }}
                            className="btn btn-primary"
                            data={this.state.items}>
                            Lataa csv-tiedosto
                    </CSVLink>
                        <ModalForm buttonLabel="Lisää" addItemToState={this.addItemToState} />
                    </Col>
                </Row>
            </Container>
            <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                <p style={{marginTop:"7rem", fontWeight: "600", color: "darkblue"}}>Tämän projektin on valmistanut koulutustarkoituksiin Engjell Selaci</p>
                <p style={{ fontWeight: "600", color: "darkblue"}}>This project was made for educational purposes by Engjell Selaci</p>  
                <p style={{ fontWeight: "600", color: "darkblue"}}>2020</p>
            </div>
            </>
        )
    }
}

export default App