import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import './remDum.css';



export default function MultiActionAreaCard(props) {
    const {title, description, img} = props.remedie;
    let src = "/" + title;
  return (
    <Card sx={{ maxWidth: 345 }} className='remcard'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={src}><Button size="small" color="primary">
          Read More
        </Button></Link>
      </CardActions>
    </Card>
  );
}
