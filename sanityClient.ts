import { createClient, ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "if4q5dta",
  dataset: "production",
  apiVersion: "2022-01-01",
  useCdn: false,
};

const client = createClient(config);

export default client;
