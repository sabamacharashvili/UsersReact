import React from "react";
import UserList from "./components/UserList";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>👥 User Directory</h1>
      <UserList />
    </div>
  );
}