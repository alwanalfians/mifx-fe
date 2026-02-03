import { useEffect } from "react";
import { getAppName } from "~/utils";

const APP_NAME = getAppName();

export const usePageTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ? `${APP_NAME} | ${title}` : APP_NAME;
  }, [title]);
};
