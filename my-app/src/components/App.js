import '../assets/css/App.css';
import ContentWrapper from './ContentWrapper';
import SideBar from './SideBar';

function App() {
  return (
    <div className="App">
	    <div id="wrapper">
        <SideBar />
        <ContentWrapper />
      </div>
    </div>
  );
}

export default App;
