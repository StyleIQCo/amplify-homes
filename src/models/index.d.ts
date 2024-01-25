import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type ShoesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerShoes = {
  readonly id: string;
  readonly designer?: string | null;
  readonly model?: string | null;
  readonly price?: number | null;
  readonly url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyShoes = {
  readonly id: string;
  readonly designer?: string | null;
  readonly model?: string | null;
  readonly price?: number | null;
  readonly url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Shoes = LazyLoading extends LazyLoadingDisabled ? EagerShoes : LazyShoes

export declare const Shoes: (new (init: ModelInit<Shoes, ShoesMetaData>) => Shoes) & {
  copyOf(source: Shoes, mutator: (draft: MutableModel<Shoes, ShoesMetaData>) => MutableModel<Shoes, ShoesMetaData> | void): Shoes;
}

type EagerHome = {
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHome = {
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Home = LazyLoading extends LazyLoadingDisabled ? EagerHome : LazyHome

export declare const Home: (new (init: ModelInit<Home, HomeMetaData>) => Home) & {
  copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}