import { Route, Routes } from "react-router-dom";

import Dashboard from "../containers/dashboard";
import Team from "../containers/team";
import Invoices from "../containers/invoices";
import Contacts from "../containers/contacts";
import Bar from "../containers/bar";
import Form from "../containers/form";
import Line from "../containers/line";
import Pie from "../containers/pie";
import FAQ from "../containers/faq";
import Calendar from "../containers/calendar";
import Geography from "../containers/geography";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/form" element={<Form />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/pie" element={<Pie />} />
      <Route path="/line" element={<Line />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/geography" element={<Geography />} />
    </Routes>
  );
};

export default AppRoutes;
