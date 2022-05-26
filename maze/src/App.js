import Provider from './navigation/provider';
import Navigator from './navigation/navigator';
import MainPage from './pages/main';

function App() {
  return (
    <Provider>
      <Navigator/>
      <MainPage/>
    </Provider>
  );
}

export default App;
