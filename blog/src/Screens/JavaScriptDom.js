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

const JavaScriptDom = () => {
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

  var text = `All the HTML elements like heading tags (<h1> to <h6>) and paragraph tags (<p>) in the page create an element node in the tree. 
  You use these nodes to gain access to the elements’ attribute and text nodes.`;

  return (
    <div>
      <CssBaseline />
      <Grid container spacing={2}>
        <Container maxWidth="md">
          <Box sx={{ bgcolor: "#fff", mt: 10, mb: 3 }}>
            <Container maxWidth="md">
              <h1>JavaScript Document Object Model (DOM)</h1>
              <p>
                A Document Object Model is a programming interface for HTML
                (HyperText Markup Language) and XML (eXtensible Markup Language)
                documents. It provides a data representation comprising all the
                objects, depicting the structure and content of the document on
                the web. Every webpage has its own DOM that represents the page
                so that programs can alter its structure, look, and content.
                <br />
                <br />
                In simpler terms, when a browser loads a webpage, it creates a
                model of that page. This model is the DOM tree and is filed in
                the browser’s memory. It provides functionality globally to the
                document, including how to obtain the page details and create
                new elements in the document. Remember, DOM is neither a part of
                HTML nor JavaScript; it’s a separate set of rules. All the major
                browser makers implement it and it covers two primary sections:
                <ul>
                  <li>Creation of the DOM tree</li>
                  <li>Manipulation of the DOM tree</li>
                </ul>
                We will cover both these areas in this tutorial so you will
                understand how JavaScript actually works with the DOM. For now,
                let’s see what a DOM tree looks like and its different
                components with the help of a program.
              </p>
            </Container>
            <Container maxWidth="md">
              <h1>JavaScript DOM Tree</h1>
              <img src="/Images/Dom-Tree.png" alt="tree" />
              <p>
                Every element, attribute, and text content in the HTML creates
                its own DOM node in the tree. A DOM tree consists of four main
                types of nodes: <br />
                <br />
                <li>Document node:</li>
                This is added at the top of the tree and represents the entire
                page in the browser. As stated above, it is the starting point
                in the DOM tree; you need to navigate via the document node to
                access any other node in your DOM tree.
                <br />
                <br />
                <li>Element nodes:</li>
                {text}
                <br />
                <br />
                <li>Attribute nodes:</li>
                When the opening tags in the HTML document contain attributes,
                the tree represents them as attribute nodes. These are not the
                children of the element nodes but a part of them.
                <br />
                <br />
                <li>Text nodes:</li>
                Once you have access to the element node, you can reach the text
                content within that element, stored inside the text nodes of the
                DOM tree. These nodes cannot have child nodes. Thus, a text node
                always creates a new branch in the DOM tree, and no further
                branches come out of it.
                <br />
                <br />
                Want to see it in action? Open your Browser Elements Tab (Ctrl +
                Shift + I). In the previous DataFlair’s tutorial of JavaScript
                Classes, we used this shortcut to use the Browser Console.
                Explore all the tabs that this shortcut provides and the changes
                you notice when you adjust the code a bit. If you want to become
                a good web developer, you will need these tabs a lot while
                developing.
              </p>
            </Container>
            <Container maxWidth="md">
              <h1>Working with the DOM Tree in JavaScript DOM</h1>
              <p>
                To access and modify the DOM tree, you need to follow two steps:
                <br />
                <br />
                <li>Locate the node representing the element you want.</li>
                <li>
                  Works with the node’s content, child elements, and attributes.
                </li>
                <br />
                This is only an overview of all the methods and properties that
                you will learn further in this tutorial. It acts as a guide when
                you search for a specific topic in the future. All the methods
                mentioned are detailed as you continue reading the tutorial, so
                you will have a strong understanding of all of them when you
                finish this tutorial. Some DOM methods only work in certain
                browsers or are buggy. Inconsistent browser support for the DOM
                was one of the reasons jQuery became popular.
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
export default JavaScriptDom;
