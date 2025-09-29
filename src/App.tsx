import { Desktop } from './screens/Desktop';
import { Mobile } from './screens/Mobile';

function App() {
  const isMobile = window.innerWidth < 1024;

  return (
    <div className="App">
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  );
}

export default App;