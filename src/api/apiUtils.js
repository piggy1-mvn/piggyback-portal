import { toast } from "react-toastify";

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  handleError(await response.text());
}

export function handleError(error) {
  console.error("API call failed. " + error);
  toast.warn("Something went wrong");
  throw error;
}
