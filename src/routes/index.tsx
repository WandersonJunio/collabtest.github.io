import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Nav } from "../components/nav/Nav";
import { Home } from "../pages/home/Home";
import { Users } from "../pages/users";


export const ROUTES = {
    USERS: '/users',
    HOME: '/'
}

export const Router: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
        </Switch>
    </BrowserRouter>
)