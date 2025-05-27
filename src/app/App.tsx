import { BrowserRouter, Route, Routes } from "react-router";
import { Film, Home, Login, PlayerFilm, Register, Search } from "@/pages";
import { AuthLayout, MainLayout } from "@/app/layouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="film/:id" element={<Film />} />
          <Route path="/play/:id" element={<PlayerFilm />} />
          <Route path="/search" element={<Search />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
