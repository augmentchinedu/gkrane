import { client, gql } from "@/gql/index.js";
import { useStore } from "@/store";

export function useStor() {
  const addProductType = async (type) => {
    //   const { app } = useStore();
    //   try {
    //     const mutation = gql`
    //       mutation addProductType($input: AddProductTypeInput!) {
    //         addProductType(input: $input) {
    //           type
    //         }
    //       }
    //     `;
    //     const response = await client.request(mutation, {
    //       input: { type },
    //     });
    //     console.log("Product type added:", response.addProductType);
    // return response.addProductType;
    //   } catch (error) {
    //     console.error("Error adding product type:", error);
    //     throw error;
    //   }
  };

  return { addProductType };
}
