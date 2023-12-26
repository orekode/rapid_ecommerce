
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";


import Root      from "./layouts/Root";
import LayoutOne from "./layouts/LayoutOne";
import LayoutTwo from "./layouts/LayoutTwo";

import * as General from "@/pages/general";
import * as Admin from "@/pages/admin";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from "react-redux";
import { RootState } from "./store";


function App() {

  const mode = useSelector((state: RootState) => state.general.mode);

  const darkTheme = createTheme({
    palette: {
      mode: mode == 'dark' ? 'dark' : 'light',
    },
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={ <Root /> }>

          <Route element={ <LayoutOne /> }>
            <Route path="/" element={ <General.Home /> } />
          </Route>

          <Route path="/admin" element={ <LayoutTwo /> }>
            <Route index              element={ <Admin.Dashboard /> } />
            <Route path="categories"  element={ <Admin.Categories /> } />
          </Route>

        </Route>
      </Route>
    )
  )

  return (
    
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
    </ThemeProvider>
    
  )
}

export default App
