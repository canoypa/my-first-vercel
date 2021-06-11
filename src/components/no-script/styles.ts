import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.default,
    },
  })
);
