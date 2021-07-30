import AppHeader from './component/AppHeader'
import AppMain from './component/AppMain'
import AppFooter from './component/AppFooter'
import Banner from './component/Banner'


function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Banner/>
      <AppMain/>
      <AppFooter/>
    </div>
  );
}

export default App;
