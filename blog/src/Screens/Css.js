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

const Css = () => {
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
              <h1>WHAT IS CSS?</h1>
              <p>
                CSS stands for Cascading Style Sheet. Where HTML is what defines
                the structure and content of a web page, a Cascading Style Sheet
                is a web document that allows you to change the appearance of
                the HTML. CSS allows you to change the size, style, font, and
                color of text; margins and padding; background colors and border
                styles. It can also be used to position elements on a page (but
                we’ll leave that for another day).
              </p>
            </Container>
            <Container maxWidth="md">
              <h1>ONE BIG ADVANTAGE OF CSS IS CONSISTENCY</h1>
              <p>
                The best thing about CSS is that is allows you to make global
                style changes that affect every instance of a certain element
                throughout your blog or website so that you don’t have to make
                these changes at the individual page level. This saves you a ton
                of time when it comes to redesigning your blog. Here’s an
                example of what I mean: as we learned last week, the page title
                on a blog page is defined by an HTML element called an H1
                (heading 1). By default, the browser displays an H1 as extra
                large, bold, black text, much like we saw in the PAWS example.
                If we want to change the color, font and size of all the H1’s on
                our blog to keep consistency throughout, all you need to do is
                define what all H1’s will look like in your CSS. Sometimes
                different browsers may display slightly different default
                styles. Using a style sheet to define what a specific element
                should look like can keep the look of your blog consistent from
                one browser to another as well as one device to another.
              </p>
            </Container>
            <Container maxWidth="md">
              <h1>HOW DOES CSS WORK?</h1>
              <h2>THE CASCADE</h2>
              <p>
                A very important piece of CSS is the “Cascading” part. The
                browser reads style definitions from top to bottom in a style
                sheet. This means that a style you define lower in the style
                sheet will override any previous styles defined earlier in the
                style sheet. We’ll get into that in a moment. You can also have
                a style sheet override another style sheet. This is how we are
                able to override predefined styles from our blog themes or
                plugin widgets, as our custom style sheet is usually the last
                one read by the browser.
              </p>
            </Container>
            <Container maxWidth="md">
              <h2>TROUBLESHOOTING AND COMMON SYNTAX ERRORS</h2>
              <p>
                Sometimes after editing your style sheet, you might get an error
                or find that a particular style definition is not working when
                you refresh your browser window. Oftentimes, these are caused by
                syntax errors. Browsers can be very particular when it comes to
                proper syntax and one little mistake can throw everything off.
                If this happens… Check your style sheet for missing semi-colons,
                spelling errors or missing opening and closing curly braces. Did
                you forget the dot before a class name or add a dot before an
                HTML element? Are there commas between multiple selectors? Your
                error may be in your HTML: Did you follow the word ‘class’ with
                an equal sign and no spaces? Did you surround the class name
                with double quotes? Is the class name spelled exactly the same
                in the HTML as it is in the CSS?
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
export default Css;
