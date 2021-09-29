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

const ReactHooks = () => {
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
              <h1>WHAT IS REACT HOOKS?</h1>
              <p>
                React Hooks have a very simple API, but given its massive
                community and variety of use cases, questions are bound to arise
                around React Hooks best practices and how to solve common
                problems.
                <br />
                <br />
                In this tutorial, we’ll outline some React Hooks best practices
                and highlight some use cases with examples, from simple to
                advanced scenarios. To help demonstrate how to solve common
                React Hooks questions, I built an accompanying web app for live
                interaction with the examples herein.
              </p>
            </Container>
            <Container maxWidth="md">
              <h1>What problems do React Hooks solve?</h1>
              <p>
                Before I detail my frustrations with React Hooks, I want to
                state for the record that I am, for the most part, a fan of
                React Hooks. <br />
                <br />I often hear that the main reason for the existence of
                Hooks is to replace class components. Sadly, the main heading in
                the official React site’s post introducing Hooks undersells
                Hooks with this not-so-bold statement:
                <br />
                <br />
                Hooks are a new addition in React 16.8. They let you use
                state,and other React features without writing a class.
                <br />
                <br />
                This explanation does not give me a lot of motivation to use
                React Hooks apart from “Classes are not cool, man!” For my
                money, React Hooks allow us to address cross-cutting concerns in
                a much more elegant way than the previous patterns such as
                mixins, higher-order components and render props.
                Functionalities such as logging and authentication are not
                component-specific and React Hooks allow us to attach this type
                of reusable behavior to components.
              </p>
            </Container>
            <Container maxWidth="md">
              <h1>Conclusion</h1>
              <p>
                React Hooks have problems, and there is no getting around this
                fact. I have always loved React’s declarative approach, where
                state changes and the UI updates. The dependency arrays of
                useEffect and friends sound like a declarative way of making
                this happen.
                <br />
                <br />
                If the dependency array only contains primitives, then this is
                great. Unfortunately, problems arise when you have objects and
                functions in the dependency array. Reference checking is how
                objects and functions are compared in JavaScript natively. An
                ill-placed arrow function will lead to a useEffect Hook spinning
                into an infinite loop. Developers are then left to ponder the
                choice between useCallback, useRef, useMemo etc., to come up
                with the winning formula.
                <br />
                <br />
                The fact that React Hooks can only be called from the top-level
                leads to workarounds that should be handled at the framework
                level.
                <br />
                <br />
                React Hooks also force you into working with closures, and I
                have many scars from unexpected things happening when working
                with closures. Stale state due to code executing in a closure is
                one of the problems the Hooks linter sets out to cure.
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
export default ReactHooks;
