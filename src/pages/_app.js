import "@/styles/globals.css";
import AppContext from "@/components/AppContext";
export default function App({ Component, pageProps }) {
  return (
    <AppContext>
      <Component {...pageProps} />;
    </AppContext>
  );
}
