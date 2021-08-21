import Image from "react-bootstrap/Image";
import star from "../assets/star.png";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Truncate from "react-truncate";

const useStyles = makeStyles({
  root: {
    marginTop: 50,
    marginRight: 30,

    maxWidth: 345,
  },
  cardAction: {
    width: 255,
  },
  card__img: {
    height: 250,
    objectFit: "contain",
  },
});

export default function DeviceItem({ device }) {
  const history = useHistory();

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.cardAction}
        onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}
      >
        <CardMedia
          className={classes.card__img}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={device.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Truncate lines={1}>{device.name}</Truncate>
          </Typography>{" "}
          <Typography gutterBottom variant="h5" component="h2">
            Цена: {device.price} ₽
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <Truncate lines={3}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Truncate>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => history.push(DEVICE_ROUTE + "/" + device.id)}
          size="small"
          color="primary"
        >
          Подробнее...
        </Button>
      </CardActions>
    </Card>
  );
}
