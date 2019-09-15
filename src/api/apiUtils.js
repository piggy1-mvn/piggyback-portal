import { toast } from "react-toastify";

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    console.log(response);
  }
}

export function handleError(error) {
  console.error("API call failed. " + error);
  toast.warn("Something went wrong");
  throw error;
}
