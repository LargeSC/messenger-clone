"use client";
import { signOut } from "next-auth/react";

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default Users;
