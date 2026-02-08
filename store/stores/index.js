import { client, gql } from "@/gql/index.js";
import { useStore } from "@/store";

export function useStores() {
  const create = async (store) => {
    const { user } = useStore();

    store.type = store.type.toLowerCase();
    store.creator = user.id;

    try {
      const mutation = gql`
        mutation createStore($input: CreateStoreInput!) {
          createStore(input: $input) {
            store {
              id
              name
            }
          }
        }
      `;

      const response = await client.request(mutation, {
        input: store,
      });

      console.log("Store created:", response.create);
      return response.create;
    } catch (error) {
      console.error("Error creating store:", error);
      throw error;
    }
  };

  return { create };
}
