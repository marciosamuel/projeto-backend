import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType()
export class PowerStats {
  @Field(() => Int, { nullable: true })
  intelligence?: number;
  @Field({ nullable: true })
  strength?: number;
  @Field({ nullable: true })
  speed?: number;
  @Field({ nullable: true })
  durability?: number;
  @Field({ nullable: true })
  power?: number;
  @Field({ nullable: true })
  combat?: number;
}

@ObjectType()
export class Appearance {
  @Field({ nullable: true })
  gender?: string;
  @Field({ nullable: true })
  race?: string;
  @Field(() => [String], { nullable: true })
  height?: [string];
  @Field(() => [String], { nullable: true })
  weight?: [string];
  @Field({ nullable: true })
  eyeColor?: string;
  @Field({ nullable: true })
  hairColor?: string;
}

@ObjectType()
export class Biography {
  @Field({ nullable: true })
  fullName?: string;
  @Field({ nullable: true })
  alterEgos?: string;
  @Field(() => [String], { nullable: true })
  aliases?: [string];
  @Field({ nullable: true })
  placeOfBirth?: string;
  @Field({ nullable: true })
  firstAppearance?: string;
  @Field({ nullable: true })
  publisher?: string;
  @Field({ nullable: true })
  alignment?: string;
}

@ObjectType()
export class Work {
  @Field({ nullable: true })
  occupation?: string;
  @Field({ nullable: true })
  base?: string;
}

@ObjectType()
export class Connections {
  @Field({ nullable: true })
  groupAffiliation?: string;
  @Field({ nullable: true })
  relatives?: string;
}

@ObjectType()
export class Images {
  @Field({ nullable: true })
  xs?: string;
  @Field({ nullable: true })
  sm?: string;
  @Field({ nullable: true })
  md?: string;
  @Field({ nullable: true })
  lg?: string;
}

@ObjectType()
export class SuperHero {
  @Field(() => ID, { nullable: false })
  id!: number;
  @Field()
  name!: string;
  @Field({ nullable: true })
  slug?: string;
  @Field({ nullable: true })
  powerstats?: PowerStats;
  @Field({ nullable: true })
  appearance?: Appearance;
  @Field({ nullable: true })
  biography?: Biography;
  @Field({ nullable: true })
  work?: Work;
  @Field({ nullable: true })
  connections?: Connections;
  @Field({ nullable: true })
  images?: Images;

  [key: string]: any;
}
