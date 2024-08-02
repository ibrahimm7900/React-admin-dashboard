import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import SidebarMenu from './scenes/global/SidebarMenu';
import Dashboard from './scenes/Dashboard';
import Team from "./scenes/team";
import { useState } from "react";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import FAQ from "./scenes/faq";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import Bar from "./scenes/bar"; 
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarMenu isSidebar={isSidebar}/>
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar}/>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} /> 
              <Route path="/invoices" element={<Invoices />} /> 
              <Route path="/contacts" element={<Contacts />} /> 
              <Route path="/form" element={<Form />} /> 
              <Route path="/calendar" element={<Calendar />} /> 
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
                
               
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;