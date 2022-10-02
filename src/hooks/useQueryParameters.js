import { useLocation } from "react-router";

export const useQueryParameters = () => {
  return new URLSearchParams(useLocation().search);
};
