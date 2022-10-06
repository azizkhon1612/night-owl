import { useSearchParams } from "react-router-dom";
import { Supported_Query } from "../shared/const";

export const useCurrentParams = () => {
  const [searchParam] = useSearchParams();

  const currentSearchParams = JSON.parse(JSON.stringify(Supported_Query)) as {
    [key: string]: string[];
  };

  searchParam.forEach((value, key) => {
    currentSearchParams[key].push(value);
  });

  return [currentSearchParams] as const;
};
