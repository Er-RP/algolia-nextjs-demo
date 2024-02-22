import { useRouteError } from "react-router";


const ErrorElement = () => {
    const error = useRouteError();
console.error("Routing Error :",error)
  return (
    <div>{error?.data || "Error occured"}</div>
  )
}

export default ErrorElement