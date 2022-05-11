import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "contexts/ThemeContext";
import { RefreshContextProvider } from "contexts/RefreshContext";
import store from "state";
import { ModalProvider } from "components/Modal";

const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <ThemeContextProvider>
          <RefreshContextProvider>
            <ModalProvider>{children}</ModalProvider>
          </RefreshContextProvider>
        </ThemeContextProvider>
      </HelmetProvider>
    </Provider>
  );
};

export default Providers;
