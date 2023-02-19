import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    console.log("INSIDE ASYNC EVENT");
    // TODO log the user in

    throw redirect(301, "/dashboard/home");
  },
};
