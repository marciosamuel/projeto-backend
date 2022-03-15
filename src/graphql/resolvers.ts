import { ApolloError } from "apollo-server";
import { Arg, Args, Query, Resolver } from "type-graphql";
import { getAll, getOne } from "../api";
import { Filter, FilterArgs, ListArgs } from "./argsType";
import { SuperHero } from "./objectTypes";

@Resolver(SuperHero)
export class SuperHeroResolver {
  private data: SuperHero[] = [];

  @Query(() => [SuperHero])
  async listHeroes(@Args() {limit, order}: ListArgs): Promise<SuperHero[]> {
    try {
      const data = await getAll();
      const heroes: SuperHero[] = [...data, ...this.data];

      if (!order) return heroes.slice(0, limit);

      if (heroes[0].hasOwnProperty(order)) {
        return heroes
          .sort((a, b) => (a[order] < b[order] ? -1 : 1))
          .slice(0, limit);
      }

      return heroes
        .sort((a, b) => {
          const entry = Object.entries(a).find((entry) =>
            entry[1].hasOwnProperty(order)
          );
          if (entry) return a[entry[0]][order] < b[entry[0]][order] ? -1 : 1;
          return 0;
        })
        .slice(0, limit);
    } catch (error) {
      throw new ApolloError("Failed to load heroes");
    }
  }

  @Query(() => SuperHero)
  async getSingleHero(@Arg("id") id: number): Promise<SuperHero> {
    const localHero = this.data.find((h) => h.id === id);
    if (localHero) return localHero;

    try {
      return await getOne(id);
    } catch (error) {
      throw new ApolloError("Superhero not found");
    }
  }

  @Query(() => [SuperHero])
  async searchHeroes(@Args() {query, filter}: FilterArgs) {
    try {
      const data = await getAll();
      const heroes = [...data, ...this.data];

      function search(prop?: string | number | Object): boolean {
        if (!prop) return false;

        if (typeof prop === "object") {
          let heroFound = false;
          Object.values(prop).forEach((value) => {
            if (heroFound) return;
            heroFound = search(value);
          });
          return heroFound;
        }

        return `${prop}`.toLowerCase().includes(query.toLowerCase());
      }

      if (!filter) return heroes.filter((hero) => search(hero));

      if (filter === Filter.name)
        return heroes.filter((hero) =>
          hero.name.toLowerCase().includes(query.toLowerCase())
        );
      return heroes.filter((hero) => search(hero[filter]));
    } catch (error) {
      console.log(error);
      throw new ApolloError("Failed to load heroes");
    }
  }
}
