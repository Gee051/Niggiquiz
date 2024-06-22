import Image from "next/image";
import Banner from "./components/Banner";
import Rules from "./components/Rules";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#fdfdfd]">
      <Banner />

      <div className="niggiNav">
        <Rules />
      </div>
      <Footer />
    </main>
  );
}
