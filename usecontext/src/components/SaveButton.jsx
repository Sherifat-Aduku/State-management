import React from "react";
import { useAlert } from "./useAlert";

const SaveButton = () => {
  const { addNotification } = useAlert();
  return <button onClick={() => addNotification("Settings saved!")}>Save</button>;
};

export default SaveButton;
