import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useIsLoading = (): boolean => {
  const route = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlerChanging = () => setIsLoading(true);
  const handlerChanged = () => setIsLoading(false);

  useEffect(() => {
    route.events.on("routeChangeStart", handlerChanging);
    route.events.on("routeChangeComplete", handlerChanged);

    return () => {
      route.events.off("routeChangeStart", handlerChanging);
      route.events.off("routeChangeComplete", handlerChanged);
    };
  }, []);

  return isLoading;
};
