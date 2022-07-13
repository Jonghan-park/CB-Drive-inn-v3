import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import axios from "axios";

function MyPage() {
  const username = useContext(UserContext);

  return <h2>{username.user.name}</h2>;
}

export default MyPage;
