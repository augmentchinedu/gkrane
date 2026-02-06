import { GraphQLClient } from "graphql-request";

const isCodespaces = window.location.hostname.includes("github.dev");

const endpoint = isCodespaces
  ? `https://${window.location.hostname.replace(/-\d+/, "-3000")}/graphql`
  : `https://${window.location.host}/graphql`;

// HTTP client always reads latest token from localStorage
export const client = new GraphQLClient(endpoint, {
  credentials: "include",
  headers: {
    get Authorization() {
      const token = localStorage.getItem("token");
      return token ? `Bearer ${token}` : "";
    },
  },
});
