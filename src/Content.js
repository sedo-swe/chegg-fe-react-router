// Content.js
function Content({ loggedIn, fontSize, text }) {
    return loggedIn && <p style={{ fontSize: `${fontSize}px` }}>{text}</p>;
}

export default Content;