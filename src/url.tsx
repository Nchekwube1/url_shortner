import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
type UrlParams = {
  id: string;
};
function Url() {
  const { id } = useParams<UrlParams>();
  useEffect(() => {
    axios.post(`http://localhost:5000/urls/${id}`).then((res) => {
      let newUrl = res.data;
      window.location.replace(newUrl);
    });
  }, [id]);
  return (
    <div>
      <h1>Please wait ......</h1>
    </div>
  );
}

export default Url;
