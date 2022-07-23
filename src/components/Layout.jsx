import { MainAppBar } from "./MainAppBar";
import Footer from "./Footer";

export function Layout({ children }) {
  return (
    <>
      <MainAppBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
