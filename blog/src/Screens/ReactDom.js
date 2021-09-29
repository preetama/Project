import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";

function ReactDom() {
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

  const styleA = {
    backgroundImage: `url(/Images/ads-300x250.jpg)`,
    backgroundRepeat: "no-repeat",
  };

  var text = `“dependencies": {
    // rest of the dependencies installed
    "react-router-dom": "6.0.0-beta.0",
  },`;

  return (
    <div>
      <CssBaseline />
      <Grid container spacing={2}>
        <Container maxWidth="md">
          <Box sx={{ bgcolor: "#fff", mt: 10, mb: 3 }}>
            <Container maxWidth="md">
              <h1>WHAT IS REACT ROUTER DOM?</h1>
              <p>
                Single page applications (SPAs) with multiple views need to have
                a mechanism of routing to navigate between those different views
                without refreshing the whole web page. This can be handled by
                using a routing library such as React Router. In this tutorial,
                let’s take a look at how to create routes using the React Router
                v6 library. Do note that, at the time of writing this post,
                React Router v6 is still in beta. This tutorial is going to give
                you a peek into some of the new features the library is coming
                out with. If you have experience working with routing in React
                apps, you may already know that over the past few years Reach
                Router has gained some attention. However, it is getting merged
                back into the React Router library starting from version 6. This
                does mean that the v6 version has a smaller bundle size than its
                previous versions, one of the major reasons that Reach Router
                exists.
              </p>
            </Container>
            <Container maxWidth="md">
              <h2>Prerequisites</h2>
              <p>
                To take full advantage of this tutorial, please make sure you
                have the following installed in your local development
                environment:
                <li>Node.js version >= 12.x.x installed</li>
                <li>
                  Access to one package manager such as npm or yarn or npx
                </li>
                <li>Basic knowledge ofJavaScript, Reactjs, and React Hooks</li>
              </p>
            </Container>
            <Container maxWidth="md">
              <h1>Getting started</h1>
              <p>
                Start by creating a new React app. Use the following command
                from a terminal window to generate the project directory, then
                navigate inside the project directory and install required
                dependencies to add React Router v6 library:
                <span>
                  <ul>
                    <li>npx create-react-app react-router-v6-example cd</li>
                    <li>react-router-v6-example yarn add history</li>
                    <li>react-router-dom@next</li>
                  </ul>
                </span>
                Once the dependency is installed open the package.json file in
                your favorite code editor and you are going to see the
                dependency version of the react-router-dom library:
                <ul>{text}</ul>
              </p>
            </Container>
            <Container maxWidth="md">
              <h1>Different packages in React Router library</h1>
              <p>
                React Router library contains three different npm packages and
                each of the following packages has a different purpose:
                <ul>
                  <li style={{ color: "red" }}>react-router</li>
                  <li style={{ color: "red" }}>react-router-dom</li>
                  <li style={{ color: "red" }}>react-router-native</li>
                </ul>
                The package react-router is the core library that is used as a
                peer dependency for the other two packages listed above. The
                react-router-dom is the package that is used in React apps for
                routing. The last package in the list, react-router-native has
                bindings to be used in developing React Native applications.
              </p>
            </Container>
          </Box>
        </Container>
        <Grid item xs={3} style={styleA} sx={{ mt: 15 }}>
          <Grid sx={{ mt: 40 }}>
            <h2>Top Stories</h2>
            <ul>
              <li>
                <a href="story1">Story 1</a>
              </li>
              <li>
                <a href="story2">Story 2</a>
              </li>
              <li>
                <a href="story3">Story 3</a>
              </li>
              <li>
                <a href="story4">Story 4</a>
              </li>
            </ul>
          </Grid>
          <Grid sx={{ mt: 10 }}>
            <h2>Social Media</h2>
            <Button href="#">
              <FacebookIcon color="primary" fontSize="large" />
            </Button>
            <Button href="#">
              <TwitterIcon color="primary" fontSize="large" />
            </Button>
            <Button href="#">
              <InstagramIcon color="primary" fontSize="large" />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </div>
  );
}
export default ReactDom;
