import { ArgsType, Field, registerEnumType } from "type-graphql";

@ArgsType()
export class ListArgs {
  @Field(() => Number, { nullable: true })
  limit?: number;
  @Field(() => String, { nullable: true })
  order?: string;
}

export enum Filter {
  name = "name",
  appearance = "appearance",
  biography = "biography",
  work = "work",
  connections = "connections",
}

registerEnumType(Filter, {
  name: "Filter",
});

@ArgsType()
export class FilterArgs {
  @Field()
  query!: string;
  @Field(() => Filter, { nullable: true })
  filter?: Filter;
}
