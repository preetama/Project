import * as React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/styles";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

function BoxSx() {
  const useStyles = makeStyles((theme) => ({
    hero: {
      backgroundImage: `url('/Images/cover1.jpg')`,
      height: "500px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "4rem",
    },
    blogsContainer: {
      paddingTop: 6,
    },
    blogTitle: {
      fontWeight: 800,
      paddingBottom: 6,
      paddingTop: 20,
    },
  }));
  const classes = useStyles();

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="#">
          Blog
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <div>
      <Box className={classes.hero}>
        <Box>React Blog</Box>
      </Box>
      <container sx={{ maxWidth: "lg" }} className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle} sx={{ mr: 165 }}>
          Articles
        </Typography>
      </container>

      <Grid container spacing={3}>
        <Grid item xs={6} md={4} lg={3}>
          <Grid container direction="column">
            <Grid item>
              <Card sx={{ maxWidth: 345, ml: 3, mt: 3 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="./Images/2.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      React Router Dom
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Many modern websites are actually made up of a single
                      page, they just look like multiple pages because they
                      contain components which render like separate pages. These
                      are usually referred to as SPAs - single-page
                      applications.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} md={4} lg={3}>
          <Grid container direction="column">
            <Grid item>
              <Card sx={{ maxWidth: 345, ml: 3, mt: 3 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="./Images/3.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      React Hooks
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Hooks are the new feature introduced in the React 16.8
                      version. It allows you to use state and other React
                      features without writing a class. Hooks are the functions
                      which "hook into" React state and lifecycle features from
                      function components. It does not work inside classes.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" href="hooks">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} md={4} lg={3}>
          <Grid container direction="column">
            <Grid item>
              <Card sx={{ maxWidth: 345, ml: 3, mt: 3 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/Images/4.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      JavaScript
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      JavaScript (js) is a light-weight object-oriented
                      programming language which is used by several websites for
                      scripting the webpages. It is an interpreted, full-fledged
                      programming language that enables dynamic interactivity on
                      websites when applied to an HTML document.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} md={4} lg={3}>
          <Grid container direction="column">
            <Grid item>
              <Card sx={{ maxWidth: 345, ml: 3, mt: 3, mr: 3 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/Images/5.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      JavaScript DOM
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      The Document Object Model (DOM) is a programming interface
                      for web documents. It represents the page so that programs
                      can change the document structure, style, and content. As
                      an object-oriented representation of the web page, it can
                      be modified with a scripting language such as JavaScript.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} md={4} lg={3}>
          <Grid container direction="column">
            <Grid item>
              <Card sx={{ maxWidth: 345, ml: 3, mt: 3 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/Images/6.jpeg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      JavaScript BOM
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      The Browser Object Model (BOM) in JavaScript includes the
                      properties and methods for JavaScript to interact with the
                      web browser. BOM provides you with a window objects, for
                      example, to show the width and height of the window. It
                      also includes the window. screen object to show the width
                      and height of the screen.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} md={4} lg={3}>
          <Grid container direction="column">
            <Grid item>
              <Card sx={{ maxWidth: 345, ml: 3, mt: 3 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/Images/7.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      HTML
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      What Is HyperText Markup Language (HTML)? HyperText Markup
                      Language (HTML) is the set of markup symbols or codes
                      inserted into a file intended for display on the Internet.
                      The markup tells web browsers how to display a web page's
                      words and images.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} md={4} lg={3}>
          <Grid container direction="column">
            <Grid item>
              <Card sx={{ maxWidth: 345, ml: 3, mt: 3, mb: 3 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/Images/8.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      CSS
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      CSS stands for Cascading Style Sheets. It is the language
                      for describing the presentation of Web pages, including
                      colours, layout, and fonts, thus making our web pages
                      presentable to the users. ... It is independent of HTML
                      and can be used with any XML-based markup language.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </div>
  );
}

export default BoxSx;
