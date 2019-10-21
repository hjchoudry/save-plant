import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import ImageIcon from "@material-ui/icons/Image";
import ContactsIcon from "@material-ui/icons/Contacts";
import InfoIcon from "@material-ui/icons/Info";
import Hidden from "@material-ui/core/Hidden";
import {
  Pagetitle,
  Container,
  IconNav,
  StyledLink,
  PageFooter
} from "./basicstyle";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  list: {
    width: 200
  }
}));

export default ({ routing }) => {
  const [activeLink, setActiveLink] = useState("/home");
  const classes = useStyles();
  const handleClick = (e, link) => {
    setActiveLink(link);
  };

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };
  const StyledList = styled(List)`
    &&&& a {
      text-decoration: none;
      color: #3c3c3c;
      font-family: "Arial";
    }
  `;

  const sideList = side => (
    <div className={classes.list} onClick={toggleDrawer(false)}>
      <StyledList>
        <Link to="/home" title="back to homepage">
          <ListItem button>
            <ListItemIcon>
              <HomeSharpIcon />
            </ListItemIcon>
            Homepage
          </ListItem>
        </Link>
        <Link to="galleries" title="Our photo galleries">
          <ListItem button>
            <ListItemIcon>
              <ImageIcon />
            </ListItemIcon>
            Galleries
          </ListItem>
        </Link>
        <Link to="/contact" title="Get in touch">
          <ListItem button>
            <ListItemIcon>
              <ContactsIcon />
            </ListItemIcon>
            Contact
          </ListItem>
        </Link>
        <Link to="/about" title="about us">
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            About
          </ListItem>
        </Link>
      </StyledList>
    </div>
  );

  return (
    <Container>
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={toggleDrawer(true)} />
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {sideList()}
            </Drawer>
          </IconButton>
          <Typography variant="h6" color="inherit">
            <Pagetitle>Save Plants</Pagetitle>
          </Typography>
        </Toolbar>
      </AppBar>

      <Hidden smDown>
        <IconNav>
          <ul>
            <StyledLink
              position="0 4px"
              padding="25px"
              active={activeLink === "home"}
              onClick={e => handleClick(e, "home")}
            >
              <Link to="/home" title="back to homepage">
                HomePage
              </Link>
            </StyledLink>
            <StyledLink
              position="168px -96px"
              padding="195px"
              active={activeLink === "galleries"}
              onClick={e => handleClick(e, "galleries")}
            >
              <Link to="galleries" title="Our photo galleries">
                Galleries
              </Link>
            </StyledLink>

            <StyledLink
              position="176px -193px"
              padding="202px"
              active={activeLink === "contact"}
              onClick={e => handleClick(e, "contact")}
            >
              <Link to="/contact" title="Get in touch">
                Contact
              </Link>
            </StyledLink>

            <StyledLink
              position="177px -294px"
              padding="205px"
              active={activeLink === "about"}
              onClick={e => handleClick(e, "about")}
            >
              <Link to="/about" title="about us">
                About
              </Link>
            </StyledLink>
          </ul>
        </IconNav>
      </Hidden>
      {routing}
      <PageFooter>
        <form action="">
          <label for="search">Looking for something?</label>
          <input type="search" placeholder="Search" title="Search" />
        </form>
        <p>&copy; 2019 Save Plants.org</p>
      </PageFooter>
    </Container>
  );
};

