import "./App.css";
import ClientReview from "./components/ClientReview/ClientReview";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import IntroComponent from "./components/IntroductionComponent/IntroComponent";
import PracticeArea from "./components/PracticeArea/PracticeArea";
import Team from "./components/Team/Team";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <IntroComponent />
      <PracticeArea />
      <ClientReview />
      <Team />
    </div>
  );
}

export default App;
