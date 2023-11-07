import { useNavigate } from "react-router-dom";
import ExclamationCircleIcon from "@heroicons/react/24/solid/ExclamationCircleIcon";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="w-2/3 flex flex-col justify-evenly p-5 mx-auto text-center bg-white rounded-lg shadow-lg min-h-[200px]">
      <span className="flex justify-center">
        <ExclamationCircleIcon width={50} className="mr-2 text-red-700" />
        <h2 className="my-5 text-2xl">Sorry, there was an error</h2>
      </span>

      <p className="text-lg">
        <button className="mr-1 hover:underline" onClick={() => navigate(-1)}>
          Click here
        </button>
        to go back to the previous page
      </p>
    </section>
  );
};
export default ErrorPage;
