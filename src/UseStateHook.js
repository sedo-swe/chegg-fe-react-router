import React, { useState } from "react";

function UseStateHook() {
    const [subscribed, setSubscribed] = useState(false);
    const [alerts, setAlerts] = useState(false);

    return (
        <section>
            <p>Please click to subscribe to my updates!</p>
            <button onClick={() => setSubscribed(!subscribed)}>{subscribed ? "Unsubscribe" : "Subscribe"}</button>
            <button onClick={() => setAlerts(!alerts)}>{alerts ? "Stop Email Alerts" : "Get Email Alerts"}</button>
        </section>
    );
}

export default UseStateHook;