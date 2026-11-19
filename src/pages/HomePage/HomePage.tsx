import Header from "../../components/Header/Header.tsx";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store.ts";

function HomePage() {
  const data = useSelector((state: RootState) => state.settings);
  const isData =
    data &&
    Object.values(data).length === 3 &&
    !Object.values(data).includes("");

  return (
    <>
      <Header name="HomePage" />
      {isData && (
        <>
          <p>Description: {data?.description}</p>
          <p>Address API: {data?.apiUrl}</p>
          <p>State: {data?.state}</p>
        </>
      )}
    </>
  );
}

export default HomePage;
