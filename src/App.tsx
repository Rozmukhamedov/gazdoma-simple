import "./App.css";
import { Dispatcher, Edit, Equipment, Home, Login, Profile, Registration } from "./pages";
import React from "react/jsx-runtime";
import { Layout } from "./containers";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./hooks/AuthProvider";
import PublicRouter from "./routers/PublicRouter";
import PrivateRouter from "./routers/PrivateRouter";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route element={<PrivateRouter />}>
              <Route path="profile" element={<Profile />} />
              <Route path="profile/edit" element={<Edit />} />
              <Route path="equipment" element={<Equipment />}></Route>
              <Route path="dispatcher" element={<Dispatcher />}></Route>
            </Route>
            <Route element={<PublicRouter />}>
              <Route path="login" element={<Login />} />
              <Route path="registr" element={<Registration />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
