import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  footer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#333333",
    paddingBottom: 10,
  },
  footer__item: {
    width: 250,
    margin: "0 auto",
    marginTop: 80,
  },
  footer__icon: {
    width: 50,
    height: 50,
    margin: "20px 16px",
    color: "whitesmoke",
  },
  footer_h3: {
    textAlign: "center",
    color: "whitesmoke",
    fontSize: 20.6,
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.footer__item}>
        <div>
          <a href="https://www.instagram.com/arg3n41ck/" target="_blank">
            <InstagramIcon className={classes.footer__icon} />
          </a>
          <a href="#">
            <FacebookIcon className={classes.footer__icon} />
          </a>
          <a href="https://github.com/Argo-mafioznik/" target="_blank">
            <GitHubIcon className={classes.footer__icon} />
          </a>
        </div>
        <h3 className={classes.footer_h3}> Copyright &copy; 2021 ARGOSHOP</h3>
      </div>
    </div>
  );
}

export default Footer;
