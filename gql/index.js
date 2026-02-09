import { GraphQLClient, gql } from "graphql-request";
import Cookies from "js-cookie";

const isCodespaces = window.location.hostname.includes("github.dev");

const endpoint = isCodespaces
  ? `https://${window.location.hostname.replace(/-\d+/, "-3000")}/graphql`
  : `https://${window.location.host}/graphql`;

// HTTP client always reads latest token from cookie
export const client = new GraphQLClient(endpoint, {
  credentials: "include",
  headers: {
    get Authorization() {
      const token = Cookies.get("token"); // read from cookie
      return token ? `Bearer ${token}` : "";
    },
  },
});

export { gql };
