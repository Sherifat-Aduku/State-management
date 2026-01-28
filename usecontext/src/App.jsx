import React from "react";
import { NotificationProvider } from "./components/NotificationProvider";
import NotificationList from "./components/NotificationList";
import LoginButton from "./components/LoginButton";
import SaveButton from "./components/SaveButton";
import "./App.css"

const App = () => {
  return (
    <NotificationProvider>
      <h1>Hello World</h1>
      <LoginButton />
      <SaveButton />
      <NotificationList />
    </NotificationProvider>
  )
}

export default App;
