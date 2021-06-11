import { Collapse, LinearProgress } from "@material-ui/core";
import { FC } from "react";
import { useIsLoading } from "../hooks/useRouterState";

export const ProgressBar: FC = () => {
  const isLoading = useIsLoading();

  return (
    <Collapse
      in={isLoading}
      mountOnEnter
      unmountOnExit
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
      }}
    >
      <LinearProgress />
    </Collapse>
  );
};
