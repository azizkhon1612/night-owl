import { FunctionComponent } from "react";
import SortBy from "./SortBy";
interface ExploreFilterProps {
  currentTab: string;
}

const ExploreFilter: FunctionComponent<ExploreFilterProps> = ({
  currentTab,
}) => {
  return (
    <>
      <SortBy />
    </>
  );
};

export default ExploreFilter;
