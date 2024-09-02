import React from "react";
import { useRouteError } from "react-router-dom";

type Props = {};

interface ErrorResponseImpl {
  status: number;
  statusText: string;
  internal: boolean;
  data: string;
  error: Error;
  message: string;
}

export default function ErrorPage({}: Props) {
  const error = useRouteError() as ErrorResponseImpl;
  console.log(error);
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
