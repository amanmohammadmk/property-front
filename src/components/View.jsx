import React, { useEffect, useState } from 'react'
import { getProperty } from '../service/allapi';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function View() {
  const [allProperty, setallProperty] = useState();
 
    const getallProperty = async () => {
        try {
            let response = await getProperty();
            setallProperty(response.data);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };

    useEffect(() => {
      getallProperty();
    }, []);
  return (
    <div className='container' style={{marginTop:"550px"}}>
      <Row>
                            {allProperty?.map((fullproperty) => (
                                <Col className='ps-3 mb-3' sm={7} md={6} lg={4} key={fullproperty.id}>

                                    <Card className='crd' style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={fullproperty.pimage} alt='please add a correct image path' />
                                        <Card.Body>
                                            <Card.Title className='name'>Name : {fullproperty.pname}</Card.Title>
                                            <Card.Text>Location: {fullproperty.plocation} </Card.Text>
                                            <Card.Text>Number: {fullproperty.pnumber} </Card.Text>
                                            <Card.Text>Year: {fullproperty.pyear} </Card.Text>
                                            <Card.Text>Type: {fullproperty.ptype} </Card.Text>
                                            <Card.Text>Include: {fullproperty.pincludes} </Card.Text>
                                            <Card.Text>Facility: {fullproperty.pfacility.join(', ')} </Card.Text>  
                                        </Card.Body>
                                    </Card>

                                </Col>
                            ))}

                        </Row>

                        <Link to="/"><button className='btn btn-info'>Home</button></Link>
    </div>
  )
}

export default View