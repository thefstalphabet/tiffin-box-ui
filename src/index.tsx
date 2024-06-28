import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider} from "antd";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { primaryColor } from "./Configs/GlobalColour";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: primaryColor,
            borderRadius: 5,
            fontFamily:"Segoe UI Symbol",
            fontSize: 14,
          },
        }}
      >
        <Provider store={store}>
        <App />
        </Provider>
      </ConfigProvider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
