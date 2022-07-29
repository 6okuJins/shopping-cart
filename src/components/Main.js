import {Routes, Route} from 'react-router-dom';
import { HomePage, ProductsPage} from '../pages';

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='products' element={<ProductsPage />} />
      </Routes>
    </div>
  )
}
export default Main;