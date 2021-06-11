import { Typography } from "@material-ui/core";
import { FC } from "react";
import { useStyles } from "./styles";

export const NoScript: FC = () => {
  const classes = useStyles();
  return (
    <noscript className={classes.container}>
      <Typography variant="subtitle1">
        You need to enable JavaScript to run this app.
      </Typography>
    </noscript>
  );
};
