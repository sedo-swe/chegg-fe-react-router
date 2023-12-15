// Header.js
function Header({ loggedIn, handleLoggedInClick, handleFontSizeIncrease }) {
    return (
        <div>
            <button onClick={handleLoggedInClick}>
                {loggedIn ? "Log Out" : "Log In"}
            </button>
            <button onClick={handleFontSizeIncrease}>
                Increase Font Size
            </button>
        </div>
    );
  }

export default Header;