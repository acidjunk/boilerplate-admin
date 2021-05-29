import * as React from 'react';
import { Admin, Resource, fetchUtils } from "react-admin";
import polyglotI18nProvider from 'ra-i18n-polyglot';
import dutchMessages from "ra-language-dutch";
import englishMessages from "ra-language-english";
import simpleRestProvider from "./dataProvider";
import customRoutes from './routes';

import { Login } from './layout';
import API_URL from "./Constants";
import { ProductCreate, ProductEdit, ProductIcon, ProductList, ProductShow } from "./Products";
import Dashboard from "./Dashboard";
import themeReducer from "./themeReducer";
import Layout from "./layout/Layout";

// import products from './products';

const messages: any = {
  en: englishMessages,
  nl: dutchMessages,
};

const i18nProvider = polyglotI18nProvider((locale) => messages[locale], "nl");

const httpClient = (url:string, options:any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: "application/json" });
    }
    return fetchUtils.fetchJson(url, options);
    // return getUser().then((user) => {
    //     if (!user) {
    //         // If we can't find the token just call the api, if we receive unauthorized or forbidden, we will automatically
    //         // redirect to authorize
    //         return fetchUtils.fetchJson(url, options);
    //     }
    //     options.headers.set("Authorization", `Bearer ${user.access_token}`);
    //     return fetchUtils.fetchJson(url, options);
    // });
};

const dataProvider = simpleRestProvider(`${API_URL}`, httpClient);



interface AppProps {
}

const App = ({ }: AppProps) => {

  return (
      <Admin
          title="Boilerplate admin"
          dataProvider={dataProvider}
          customReducers={{ theme: themeReducer }}
          customRoutes={customRoutes}
          // authProvider={authProvider}
          dashboard={Dashboard}
          layout={Layout}
          loginPage={Login}
          i18nProvider={i18nProvider}
          disableTelemetry
      >
          <Resource
              name="products"
              list={ProductList}
              edit={ProductEdit}
              create={ProductCreate}
              show={ProductShow}
              icon={ProductIcon}
          />
      </Admin>
  );
};

export default App;
