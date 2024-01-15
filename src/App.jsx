import VideoCardContainer from "./components/VideoCardContainer";
import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <VideoCardContainer />
    </div>
  );
}

export default App;
