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

const Html = () => {
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
              <h1>5 Best Blogs for HTML</h1>

              <h2>1. CodePen Blog</h2>
              <p>
                CodePen is probably the most attractive blog that you can use to
                build, test and discover front- end code. It is an online
                community and a social development environment for testing and
                showcasing HTML, CSS and JavaScript code snippets that you
                create. As the name suggests, the users work by creating “pens”.
                Pens are basically sets of HTML, CSS, and JavaScript. CodePen is
                like an online code editor along with an open-source learning
                environment where you get to read blogs and tutorials from other
                contemporary developers. CodePen is one of the largest
                communities for web developers and designers to show off their
                coding skills, build test cases, find inspiration and share your
                work with the community.
              </p>
            </Container>
            <Container maxWidth="md">
              <h2>2. Design Shack</h2>
              <p>
                At Design Shack, learners get to explore a wide compilation of
                hundreds of articles, tips, and inspiring collections on website
                designs and templates. Design Shack, like most of the blogs on
                this list, is not a dedicated blog towards HTML, it consists of
                a wide range of topics including web graphics, layouts, mobile
                navigation, software trends, UX Design, tips and tricks of
                designing and editing tools and more along with the basics of
                web development like HTML, CSS and Javascript. Design Shack is
                like a magazine for creative heads, designers and developers.
                Design Shack is perfect for beginners and also for skilled
                developers who are looking to sharpen their skills in the field
                of web development and web design.
              </p>
            </Container>
            <Container maxWidth="md">
              <h2>3. Smashing Magazine</h2>
              <p>
                Smashing Magazine is probably the most familiar and popular web
                development blog amongst learners. The reason behind its success
                of this blog is that is regularly updated with blogs, news from
                the industry and opinionated content on topics relating to HTML,
                CSS, Javascript, UX and UI design and other tools, technologies
                and languages on web development. If you are specifically
                looking for articles on basic coding, you can find many posts
                that covers the concepts of HTML, CSS, JavaScript, as well as
                general web design and developer tools. Smashing design has a
                host of experienced developers and designers as contributors who
                regularly share their knowledge with the community. Smashing
                magazine is popular for publishing their content almost everyday
                about latest developments in the world of technology and hence
                it is worth to bookmark this blog for regularly polishing your
                knowledge and making yourself a proficient developer.
              </p>
            </Container>
            <Container maxWidth="md">
              <h2>4.OnextraPixel</h2>
              <p>
                OnextraPixel, popularly known as OXP, is more like a web design
                blog. It has a rich repository of some really useful blogs and
                articles that covers a wide range of topics in field of web
                design and development. OXP covers a wide range of topics that
                caters to the need of young developers as well as experienced
                professionals. From some useful HTML5 tips to a new jQuery
                library to quirky design trends, you will definitely get some
                useful content on web development. The broad categories
                mentioned on this blog is inspiration, design, graphics, CSS and
                freebies. OXP is like a digital playground for learners and
                technocrats like you. A blog like OXP helps you keep updated
                with the latest trends along with some of the best content from
                the world of web development. The content of OXP is as
                interesting as it sounds along with a good, easy to use user
                interface. Whether you are a beginner or an experienced
                developer, OXP is a good blog that you should follow.
              </p>
            </Container>
            <Container maxWidth="md">
              <h2>5. The David Walsh Blog</h2>
              <p>
                David Walsh is a popular technocrat, he is a Javascript
                consultant working for Mozilla. He hosts a widely known and
                popular blog that talks about everything on web development and
                software engineering. The David Walsh Blog covers a wide range
                of topics on programming languages and tools, such as HTML5,
                CSS, jQuery, PHP, JavaScript and many more. If you are serious
                about making a career in web development then as mentioned above
                HTML would be an essential skill and The David Walsh Blog is the
                perfect place to be to learn the basics of web development.
                Apart from tutorials and blogs, the user interface of the blog
                is also very well designed which keeps you captivated while
                learning HTML and other web development languages, tools and
                technologies. David Walsh gives blogs and articles that are
                industry relevant and all the latest tips and tricks of HTML
                that are used by IT companies are present in this blog. If you
                want to learn HTML from an industry professional, David Walsh
                Blog is the perfect choice!
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
export default Html;
