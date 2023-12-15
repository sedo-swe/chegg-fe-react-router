// WelcomeBack.js
import "./WelcomeBack.css";

function WelcomeBack({ name = "valued customer" }) {
    // variable style
    const pStyle = {
        color: "black",
        // fontFamily: "sans-serif",
        fontFamily: "Zen Dots, cursive",
    };
    const userName = {
        padding: "2px 4px",
        marginRight: "2px",
        backgroundColor: "#000",
        color: "#fff",
        borderRadius: "4px",
    };

    return (
        <p style={pStyle}>
        Welcome back, <span style={userName}>{name}</span>!
        </p>
    );


    // externaml stylesheet style
    // return <p>Welcome back, <span className="username">{name}</span>!</p>;

    // inline style
    // return (
    //     <div style={{ border: "1px solid #000", textAlign: "center", borderRadius: "4px" }}>
    //       <p>Welcome back, {name}!</p>
    //     </div>
    //  );
}

export default WelcomeBack;