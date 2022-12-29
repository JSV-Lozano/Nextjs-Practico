import "../src/styles/global.css";
import AppContext from "@context/AppContext";
import useInitialState from "hooks/useInitialState";
import Header from "../src/components/Header";

export default function App({ Component, pageProps }) {
  const InitialState = useInitialState();
  return (
    <AppContext.Provider value={InitialState}>
      <Header/>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
