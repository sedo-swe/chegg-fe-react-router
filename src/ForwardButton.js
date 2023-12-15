import React from "react";
import { useHistory } from "react-router-dom";

function ForwardButton() {
  const history = useHistory();
  return (
    <button type="button" onClick={() => history.goForward()}>
      Go Forward
    </button>
  );
}

export default ForwardButton;