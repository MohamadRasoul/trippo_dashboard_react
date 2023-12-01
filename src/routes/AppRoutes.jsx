import { Route, Routes } from "react-router-dom";

import Dashboard from "../containers/dashboard";
import Team from "../containers/team";
import Contacts from "../containers/contacts";
import Form from "../containers/form";
import DashboardLayout from "../containers/layouts/dashboard";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/form" element={<Form />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
