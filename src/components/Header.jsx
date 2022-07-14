import './styles/Header.scss'

const setFocusStyle = (e) => e.target.parentElement.classList.add('search-form_focus');
const removeFocusStyle = (e) => e.target.parentElement.classList.remove('search-form_focus');

const Header = () => {
  return (
    <header>
      <div className="logo">The Rage Lab</div>
      <nav>
        <ul>
          <li className="hvr-underline">Cases</li>
          <li className="hvr-underline">Collections</li>
          <li className="hvr-underline">Accesories</li>
          <li className="hvr-underline">About Us</li>
        </ul>
      </nav>
      <div className="header__icons">
        <form>
          <label htmlFor="search">Search</label>
          <input type="search" id="search" placeholder="Search..." onFocus={setFocusStyle} onBlur={removeFocusStyle}></input>
          <button type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </header>
  )
}

export default Header;