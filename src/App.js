import "./App.css";
import ClientReview from "./components/ClientReview/ClientReview";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import IntroComponent from "./components/IntroductionComponent/IntroComponent";
import PracticeArea from "./components/PracticeArea/PracticeArea";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <IntroComponent />
      <PracticeArea />
      <ClientReview />
    </div>
  );
}

export default App;
