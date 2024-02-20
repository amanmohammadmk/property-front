import React, { useEffect, useState } from 'react'
import { getProperty } from '../service/allapi';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Add from './Add';

function Home() {

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
        <>
            <div className='container bg-white p-5 rounded shadow' style={{ marginTop: "550px", position: "relative" }}>

                <div className='mt-5'>
                    <h1>Sell Your Property Here</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, atque, unde aperiam debitis nostrum harum molestiae, expedita repudiandae illum repellat quidem qui asperiores a. Debitis a ducimus voluptate repellat! Exercitationem.</p>
                </div>

                <div className='mt-5 d-flex flex-wrap justify-content-center flex-row gap-5'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://images.unsplash.com/photo-1557275134-5a789e9607be?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Villa
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                A housing villa refers to a residential structure that typically provides a luxurious and spacious living space. Villas are often standalone houses, distinguished by their elegant and distinctive architecture, ample outdoor spaces, and exclusive amenities. These properties are associated with a sense of prestige and privacy, making them popular among those seeking a higher standard of living.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>


                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://images.unsplash.com/photo-1594484208280-efa00f96fc21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Flats
                            </Typography>
                            <Typography variant="body2" color="text.secondary">

                                A housing flat refers to a self-contained residential unit within a larger building or complex that is typically designed for multiple dwelling units. Flats, also known as apartments or condominiums, are individual living spaces that are part of a larger residential structure. These living units are characterized by their self-contained nature, meaning they typically include essential amenities such as bedrooms, bathrooms, kitchens, and living areas.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>


                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Other
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Single-Family Home: A standalone dwelling designed for one family. It typically has its own yard and is not attached to other structures.
                                Duplex/Triplex/Quadplex: A building divided into two, three, or four separate living units, each with its own entrance.
                                Townhouse: Attached houses in a row or a block, sharing walls with adjacent units. Townhouses often have multiple floors and may have a small yard.
                                Apartment: A housing unit within a larger building containing multiple units. Apartments can vary in size and layout, and residents usually share common areas.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>

                <div className='mt-5 text-center d-flex flex-column justify-content-center'>
                    <h3>Add your property details and sell now </h3>
                    <Add />
                </div>

            </div>

            <div style={{ width: "100%", backgroundColor: "white", position: "relative" }} className=' text-center mt-5 p-5'>

                <h3 className='mb-5'>Recently Add</h3>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>PROPERTY NAME</th>
                            <th>PROPERTY LOCATION</th>
                            <th>PROPERTY TYPE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProperty?.map((fullproperty) => (
                            <tr key={fullproperty.id}>
                                <td>{fullproperty.id}</td>
                                <td>{fullproperty.pname}</td>
                                <td>{fullproperty.plocation}</td>
                                <td>{fullproperty.ptype}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Home