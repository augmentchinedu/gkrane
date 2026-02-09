import { client, gql } from "@/gql/index.js";
import { useStore } from "@/store";

export function useStores() {
  const create = async (store) => {
    const { app } = useStore();

    store.type = store.type.toLowerCase();

    try {
      const mutation = gql`
        mutation createStore($input: CreateStoreInput!) {
          createStore(input: $input) {
            id
            name
            handle
            img
            type
            bio
          }
        }
      `;

      const response = await client.request(mutation, {
        input: store,
      });

      app.content.stores[store.type].unshift(response.createStore);
      console.log("Store created:", response.createStore);
      return response.createStore;
    } catch (error) {
      console.error("Error creating store:", error);
      throw error;
    }
  };

  return { create };
}
