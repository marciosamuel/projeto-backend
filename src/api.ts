import { Axios } from "axios";
import { SuperHero } from "./graphql/objectTypes";

const BASE_URL = "https://akabab.github.io/superhero-api/api";

const api = new Axios({ baseURL: BASE_URL });

export async function getAll(): Promise<SuperHero[]> {
  return api.get("/all.json").then((r) => JSON.parse(r.data));
}

export async function getOne(id: number) {
  return api.get(`/id/${id}.json`).then((r) => JSON.parse(r.data));
}

export default api;
