import React, { Suspense, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import LoginWrapper from "./layout/LoginWrapper";
import HomeWrapper from "./layout/HomeWrapper";

function App() {
  const [fire, setFire] = useState(false)

  setTimeout(() => {
    setFire(true)
  }, 1200)

  return (
    // <Router basename={"/euphoria/dev/app/"}>
    <Router >
      {/* fire ? <LoginWrapper /> : */}
      {
        fire ? <HomeWrapper /> :
          < div
            className="flex items-center justify-center w-full"
            style={{ height: "100vh" }}
          >
            <SyncLoader size={18} color="#8A33FD" />
          </div>
      }
    </Router >
  );
}

export default App;
