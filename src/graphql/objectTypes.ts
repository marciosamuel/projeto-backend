import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class PowerStats {
  @Field()
  intelligence?: number;
  @Field()
  strength?: number;
  @Field()
  speed?: number;
  @Field()
  durability?: number;
  @Field()
  power?: number;
  @Field()
  combat?: number;
}

@ObjectType()
export class Appearance {
  @Field()
  gender?: string;
  @Field()
  race?: string;
  @Field(() => [String])
  height?: [string];
  @Field(() => [String])
  weight?: [string];
  @Field()
  eyeColor?: string;
  @Field()
  hairColor?: string;
}

@ObjectType()
export class Biography {
  @Field()
  fullName?: string;
  @Field()
  alterEgos?: string;
  @Field(() => [String])
  aliases?: [string];
  @Field()
  placeOfBirth?: string;
  @Field()
  firstAppearance?: string;
  @Field()
  publisher?: string;
  @Field()
  alignment?: string;
}

@ObjectType()
export class Work {
  @Field()
  occupation?: string;
  @Field()
  base?: string;
}

@ObjectType()
export class Connections {
  @Field()
  groupAffiliation?: string;
  @Field()
  relatives?: string;
}

@ObjectType()
export class Images {
  @Field()
  xs?: string;
  @Field()
  sm?: string;
  @Field()
  md?: string;
  @Field()
  lg?: string;
}

@ObjectType()
export class SuperHero {
  @Field(() => ID, { nullable: false })
  id!: number;
  @Field()
  name!: string;
  @Field()
  slug?: string;
  @Field()
  powerstats?: PowerStats;
  @Field()
  appearance?: Appearance;
  @Field()
  biography?: Biography;
  @Field()
  work?: Work;
  @Field()
  connections?: Connections;
  @Field()
  images?: Images;

  [key: string]: any;
}
