import { useRouter } from "next/router";
import React from "react";
const ErrorPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 5000);
  return (
    <div>
      <img
        src="https://cdn.vectorstock.com/i/1000x1000/53/27/404-page-not-found-error-access-failure-vector-46535327.webp"
        alt=""
        width="100%"
      />
    </div>
  );
};

export default ErrorPage;
