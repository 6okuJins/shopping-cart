import { BrowserRouter } from 'react-router-dom';
import { Main } from './components';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  )
}
export default App;