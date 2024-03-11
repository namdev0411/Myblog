import { envProvider } from "./envProvider";

const { API_ORIGIN } = envProvider;

export function buildApiPath(pathItem: string[]) {
  return `${API_ORIGIN}${pathItem.join("")}`;
}
