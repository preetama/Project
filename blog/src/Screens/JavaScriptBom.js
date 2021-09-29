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

const JavaScriptBom = () => {
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

  return (
    <div>
      <CssBaseline />
      <Grid container spacing={2}>
        <Container maxWidth="md">
          <Box sx={{ bgcolor: "#fff", mt: 10, mb: 3 }}>
            <Container maxWidth="md">
              <h1>What is browser object model (BOM)</h1>
              <p>
                The browser’s window is represented by a global object called
                window object. The window object can be manipulated by DOM
                (Document Object Module), BOM (Browser Object Model) and
                JavaScript references (Object, Array, Function…).
                <br />
                <br />
                <img
                  src="/Images/object.png"
                  alt="bom"
                  style={{ width: 600 }}
                />
                <br />
                <br />
                BOM is a collection of methods and properties implemented by
                browsers to control browser attributes like frames, server
                requests, current URL and functions like alerts. BOM is not
                standardized by ECMAScript, though it is described as core part
                of JavaScript. We will cover both these areas in this tutorial
                so you will understand how JavaScript actually works with the
                DOM. For now, let’s see what a DOM tree looks like and its
                different components with the help of a program.
                <br />
                <br />
                The core BOM's object is window, which represents all the
                elements of browser such as location, history, frame…etc (but
                does not include page content). All the elements of the browser
                are properties or methods of a window object, which enables
                programmer to manipulate them through JavaScript.
              </p>
            </Container>

            <Container maxWidth="md">
              <h1>Windows and frames with browser object model (BOM)</h1>
              <p>
                Browser window can be split into many parts called frames. Each
                part behaves as a separate window and can load separate
                documents. Reloading and navigation of one frame does not affect
                other frames. Each frame has a separate window object and window
                object has a name property containing name of the frame. If
                there are multiple frames in a webpage the multiple window
                objects are indexed in frame collection by both number and name
                of the frame. The window.frames syntax lists the sub-frames of
                the current window (aka iframes) as array-like object.
                <br />
                <br />
                Following list shows some of the possibilities when using the
                window object:
                <ul>
                  <li>frameList = window.frames; - returns the frame list.</li>
                  <li>window.frames[0] - access frames by number.</li>
                  <li>window.frames[‘iframe_name’] - access iframe by name.</li>
                  <li>
                    window.frames[index].location- changes the webpage in the
                    ‘index’ position to the location assigned.
                  </li>
                  <li>
                    window.length – gives the number of iframe elements in the
                    current window.
                  </li>
                </ul>
              </p>
            </Container>

            <Container maxWidth="md">
              <h1>Windows position with browser object model (BOM)</h1>
              <p>
                When a new window is opened its position with respect to
                currently viewed window (viewport) can be set in JavaScript. The
                x and y coordinates of the new window are returned with screenX
                or screenLeft and screenY or screenTop properties. These
                property names are browser specific, i.e. screenLeft, screenTop
                are for IE8 and before, screenX, screenY are for other browsers.
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
};
export default JavaScriptBom;
