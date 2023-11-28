import * as React from 'react';
import axios from "axios"
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
function About() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios("https://6554d83163cafc694fe7163f.mockapi.io/category").then(res => {
            setData(res.data)
            console.log(res.data);
        })

    }, []);
    return (
        data && data.map((elem, i) => {
            <>

                <Card key={i} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {elem.name}                        </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {elem.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
            </>
        })

    )
}

export default About