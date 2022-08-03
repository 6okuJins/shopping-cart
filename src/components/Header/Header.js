import { NavLink } from 'react-router-dom';
import { HeaderStyle } from '../../styles';
import CartButton from './CartButton';
const Header = () => {
  return (
    <div className={HeaderStyle.Header}>
      <div className={HeaderStyle.Logo}>Store</div>
      <div className={HeaderStyle.Nav}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <CartButton CartButton={HeaderStyle.CartButton} IconWrapper={HeaderStyle.IconWrapper} Counter={HeaderStyle.Counter}/>
      </div>
    </div>
  )
}
export default Header;