import { BrowserRouter } from 'react-router-dom';
import { Main, Header } from './components';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  )
}
export default App;