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

const JavaScript = () => {
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
              <h1>5 Top JavaScript Blogs to Improve Coding Skills</h1>

              <h2>
                1. <a href="https://davidwalsh.name/"> David Walsh Blog</a>
              </h2>
              <p>
                David Walsh is a renowned name in the JavaScript world. He
                started his career with DZone, but his first real break came
                while working for SitePen as a Software Engineer. His blog
                composes of topics related to JavaScript, personal thoughts,
                guides and much more. The blog design is captivating and is
                going to hook you up on the first visit. Currently, he is
                working as a Senior Web Developer at Mozilla.
              </p>
              <img src="/Images/d.jpg" alt="js1" />
            </Container>
            <Container maxWidth="md">
              <h2>2. DailyJS</h2>
              <p>
                DailyJS is one of the best JavaScript blogs on the internet. The
                blog was started by Alex R. Young, an entrepreneur and Node.js
                expert in 2009. However, there are recent changes that don’t
                sound great. Currently, the blog is no longer updated, but that
                does not make the content useless at all. The blog covers
                diverse content on JavaScript including frameworks, API’s,
                libraries, etc.
              </p>
              <img src="/Images/daily-js.jpg" alt="js2" />
            </Container>
            <Container maxWidth="md">
              <h2>
                3. <a href="https://www.sitepoint.com/javascript/">SitePoint</a>
              </h2>
              <p>
                SitePoint is one of the leading web development portals since
                2000. The main attraction of SitePoint is the collection of
                highly detailed articles. They are aimed at teaching something
                new to the readers. JavaScript, on the other hand, is one of the
                leading topics on the website where experts around the world
                contribute regularly. The rate of the new blog post is high, and
                you won’t find a blog post that doesn’t teach you something new.
                Truly, a great learning place for any JavaScript developer.
              </p>
              <img src="/Images/Sitepoint.jpg" alt="js3" />
            </Container>
            <Container maxWidth="md">
              <h2>
                4. <a href="https://www.javascript.com/">JavaScript.com</a>
              </h2>
              <p>
                Not technically a blog, but if you love JavaScript, then you
                need to follow the website’s offerings. JavaScript.com news
                section is an aggregator for excellent JavaScript news,
                tutorials, guides, and much more. All you need to do is move to
                their news section and discover tons of new content surrounding
                JavaScript. The domain is owned by CodeSchool and is mainly
                utilized to contribute to the community and a landing page to
                their courses.
              </p>
              <img src="/Images/JavaScript.jpg" alt="js4" />
            </Container>
            <Container maxWidth="md">
              <h2>
                5. <a href="https://brendaneich.com/">Brendan Eich</a>
              </h2>
              <p>
                What’s the best place to find JavaScript knowledge? The
                inventor? Well, you are right. Brendan Eich, the creator of
                JavaScript, keeps his blog with filled with his musings and
                other excellent thought processes about JavaScript. You can also
                find videos on the blog. Virtually, the blog is the mind of
                JavaScript where you understand it in an entirely different
                manner.
              </p>
              <img src="/Images/5b.jpg" alt="js5" />
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
export default JavaScript;
