import React from "react";

export const MyPage = ({ user }) => {
  return user ? <div>User exist</div> : <div>No User</div>;
};
