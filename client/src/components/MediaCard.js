import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard({title, imgURL}) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 600 }}
        image={imgURL}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <div className="title">Title: {title}</div>
        </Typography>
      </CardContent>
    </Card>
  );
}