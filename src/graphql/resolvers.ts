import { ApolloError } from "apollo-server";
import { Arg, Query, Resolver, ArgsType, Args, Field } from "type-graphql";
import { getAll, getOne } from "../api";
import { SuperHero } from "./objectTypes";

@ArgsType()
class ListArgs {
  @Field(() => Number, { nullable: true })
  limit?: number;
  @Field(() => String, { nullable: true })
  order?: string;
}

@Resolver(SuperHero)
export class SuperHeroResolver {
  private data: SuperHero[] = [];

  @Query(() => [SuperHero])
  async listHeroes(@Args() { limit, order }: ListArgs): Promise<SuperHero[]> {
    try {
      const data = await getAll();
      const heroes: (SuperHero & { [key: string]: any })[] = [
        ...data,
        ...this.data,
      ];

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
      const apiHero = await getOne(id);
      return apiHero;
    } catch (error) {
      throw new ApolloError("Superhero not found");
    }
  }
}
