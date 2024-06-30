import Layout from "./components/Layout";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const App = () => {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <Layout />
    </SkeletonTheme>
  );
};

export default App;
