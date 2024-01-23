
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
import LayoutThree from "./layouts/LayoutThree";


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
            <Route path="/"       element={ <General.Home /> } />
          </Route>
          
          <Route path="/shop"   element={ <General.Shop /> } />

          <Route path="/admin" element={ <LayoutTwo /> }>
            <Route index                element={ <Admin.Dashboard  /> } />
            <Route path="categories"    element={ <Admin.Categories /> } />
            <Route path="products"      element={ <Admin.Products   /> } />
            <Route path="tags"          element={ <Admin.Tags       /> } />

            {/* for pages with the back button at the top */}
            <Route element={ <LayoutThree /> }>
              <Route path="category/:id"  element={ <Admin.Category        /> } />
              <Route path="product/new"   element={ <Admin.CreateProduct   /> } />
              <Route path="products/:id"  element={ <Admin.UpdateProduct   /> } />
              <Route path="tag/new"       element={ <Admin.CreateTag       /> } />
            </Route>

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
