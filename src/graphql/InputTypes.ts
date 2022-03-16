import { Field, InputType } from "type-graphql";
import {
  Appearance,
  Biography,
  Connections,
  Images,
  PowerStats,
  SuperHero,
  Work,
} from "./objectTypes";

@InputType()
export class PowerStatsInput implements PowerStats {
  @Field({ nullable: true })
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

@InputType()
export class AppearanceInput implements Appearance {
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

@InputType()
export class BiographyInput implements Biography {
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

@InputType()
export class WorkInput implements Work {
  @Field({ nullable: true })
  occupation?: string;
  @Field({ nullable: true })
  base?: string;
}

@InputType()
export class ConnectionsInput implements Connections {
  @Field({ nullable: true })
  groupAffiliation?: string;
  @Field({ nullable: true })
  relatives?: string;
}

@InputType()
export class ImagesInput implements Images {
  @Field({ nullable: true })
  xs?: string;
  @Field({ nullable: true })
  sm?: string;
  @Field({ nullable: true })
  md?: string;
  @Field({ nullable: true })
  lg?: string;
}

@InputType()
export class Data implements Partial<SuperHero> {
  @Field()
  name!: string;

  @Field(() => PowerStatsInput, { nullable: true })
  powerstats?: PowerStatsInput;

  @Field(() => AppearanceInput, { nullable: true })
  appearance?: AppearanceInput;

  @Field(() => BiographyInput, { nullable: true })
  biography?: BiographyInput;

  @Field(() => WorkInput, { nullable: true })
  work?: WorkInput;

  @Field(() => ConnectionsInput, { nullable: true })
  connections?: ConnectionsInput;

  @Field(() => ImagesInput, { nullable: true })
  images?: ImagesInput;
}
