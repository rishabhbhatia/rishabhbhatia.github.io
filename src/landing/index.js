import React from 'react';
import {
  useMediaQuery,
  Grid,
  Box,
  useTheme,
  Typography,
  Avatar,
  Hidden,
} from "@mui/material";
import {
  createStyles,
  makeStyles
} from "@mui/styles";
import decorSvg from './decor';

const LandingPage = () => {
  const useStyles = makeStyles((theme) =>
    createStyles({
      container: {
        minHeight: '100vh',
        width: '100%',
        background: theme.palette.background.default,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      },
      contentWrapper: {
        width: '90%',
        margin: 0,
        padding: '10% 0%',
        [theme.breakpoints.up('sm')]: {
          maxWidth: '90%',
        },
        [theme.breakpoints.up('md')]: {
          width: '100%',
          maxWidth: 1080,
          padding: '6%',
          alignItems: 'flex-start',
        },
        [theme.breakpoints.up('lg')]: {
          maxWidth: 1500,
        },
      },
      contentItemWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
          alignItems: 'flex-start',
        }
      },
      contentItemDescWrapper: {
        marginTop: theme.spacing(),
        alignItems: 'flex-start',
        [theme.breakpoints.up('sm')]: {
          marginTop: theme.spacing(3),
        },
        [theme.breakpoints.up('md')]: {
          marginTop: theme.spacing(6.75),
        },
        [theme.breakpoints.up('lg')]: {
          marginTop: theme.spacing(8),
        }
      },
      avatar: {
        height: 220,
        width: 220,
        backgroundColor: theme.palette.common.two,
        [theme.breakpoints.up('300')]: {
          height: 260,
          width: 260,
        },
        [theme.breakpoints.up('md')]: {
          height: 320,
          width: 320,
        },
        [theme.breakpoints.up('lg')]: {
          height: 360,
          width: 360,
        }
      },
      name: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.up('300')]: {
          marginTop: theme.spacing(0.5),
        },
        [theme.breakpoints.up('375')]: {
          marginTop: 0,
        },
      },
      namePrefix: {
        ...theme.typography.h4,
        display: 'inline-table',
        lineHeight: 0,
        [theme.breakpoints.up('300')]: {
          ...theme.typography.h3,
        },
        [theme.breakpoints.up('375')]: {
          ...theme.typography.h2,
        },
      },
      nameFirstChar: {
        ...theme.typography.h2,
        color: theme.palette.common.five,
        display: 'inline',
        fontWeight: '900',
        letterSpacing: theme.spacing(0.5),
        lineHeight: 0,
        [theme.breakpoints.up('300')]: {
          ...theme.typography.h1,
        },
        [theme.breakpoints.up('375')]: {
          letterSpacing: theme.spacing(0.8),
        },
      },
      nameRemainingChars: {
        ...theme.typography.h3,
        display: 'inline',
        lineHeight: 0,
        [theme.breakpoints.up('375')]: {
          ...theme.typography.h2,
        },
      },
      contentDesc: {
        marginTop: theme.spacing(5),
      },
      socialMediaLinksWrapper: {
        marginTop: theme.spacing(6),
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          textAlign: 'start',
        },
        [theme.breakpoints.up('md')]: {
          marginTop: theme.spacing(6.75),
        }
      },
      socialMediaLink: {
        cursor: 'pointer',
        fontWeight: '600',
        textTransform: 'uppercase',
        padding: `${theme.spacing()} 0`,
        marginTop: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          marginTop: 0,
        }
      },
      decorWrapper: {
        position: 'absolute',
        bottom: '-18%',
        right: '-5%',
        height: '31.77%',
        width: '26.18%',
        [theme.breakpoints.up('md')]: {
          bottom: -143,
          right: -188.5,
          height: 286,
          width: 377,
        }
      },
    })
  );

  const SocialMediaLinks = {
    "github": "https://github.com/rishabhbhatia",
    "linkedin": "https://www.linkedin.com/in/rishabh-bhatia",
    "stackoverflow": "https://stackoverflow.com/users/5385214/rishabh-bhatia",
  };

  const classes = useStyles();
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));

  React.useEffect(() => {
    document.body.style.background = theme.palette.background.default;
  }, [theme.palette.background.default]);

  const openSocialMediaLink = (link = SocialMediaLinks.github) => window.open(link);

  return (
    <Box className={classes.container}>
      <Grid
        className={classes.contentWrapper}
        container
        spacing={2}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="center"
        direction={largeScreen ? "row-reverse" : "column"}
      >

        <Grid item xs={12} md={4} className={classes.contentItemWrapper}>
          <Avatar className={classes.avatar} alt="Rishabh Bhatia" src="https://avatars.githubusercontent.com/u/16114784?v=4" />
        </Grid>
        <Hidden smDown>
          <Grid item md={1} />
        </Hidden>
        <Grid
          className={`${classes.contentItemWrapper} ${classes.contentItemDescWrapper}`}
          item
          xs={12}
          md={7}>
          <Typography variant="body2" color="textPrimary">
            Hi There!
          </Typography>
          <Box className={classes.name}>
            <Typography className={classes.namePrefix} color="textPrimary">
              I am&nbsp;
            </Typography>
            <Typography className={classes.nameFirstChar} color="textPrimary">
              R
            </Typography>
            <Typography className={classes.nameRemainingChars} color="textPrimary">
              ishabh
            </Typography>
          </Box>

          <Typography className={classes.contentDesc} variant="body2" color="textPrimary">
            I like creating Digital Products&nbsp;&nbsp;💻 <br /><br />
            
            Past few years I have contributed towards digital transformation of organizations. I enjoy the entire process, from giving an interview to taking interviews, setting up the base of frontend app to launching it for customers. <br /><br />

            My role has been of a Frontend lead, I often play the role of an enabler. I love working closely with the design, business and marketing teams, besides the dev team.<br /><br />

            I like Agile way of approaching things. Some of my product deliveries have been quite fast-paced and rapid releases. Playing the role of a software consultant, I'm often moved to another transformation after initial product releases. I'd like working with stable teams for a longer period.
          </Typography>

          <Box className={classes.socialMediaLinksWrapper}>
            <Typography className={classes.socialMediaLink} variant="subtitle1" color="textPrimary" onClick={() => openSocialMediaLink(SocialMediaLinks.github)}>
              Github
            </Typography>
            <Typography className={classes.socialMediaLink} variant="subtitle1" color="textPrimary" onClick={() => openSocialMediaLink(SocialMediaLinks.linkedin)}>
              LinkedIn
            </Typography>
            <Typography className={classes.socialMediaLink} variant="subtitle1" color="textPrimary" onClick={() => openSocialMediaLink(SocialMediaLinks.stackoverflow)}>
              Stackoverflow
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Box className={classes.decorWrapper}>
          {decorSvg()}
        </Box>
      </Hidden>
    </Box>
  );
};

// const LandingPage = () => {
//   return <h5>Landing Page</h5>
// }

export default LandingPage;