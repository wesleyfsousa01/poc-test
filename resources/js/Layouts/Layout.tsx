import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { ReactNode } from "react";
import { Head } from "@inertiajs/react";

type AppLayoutProps = {
  children: ReactNode;
}

export default function Layout({children}: AppLayoutProps){
  return(
    <>
      <Header/>
      <div className="container">
        {children}
      </div>
      <Footer />
    </>
  )
}