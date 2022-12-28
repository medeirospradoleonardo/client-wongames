/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_GAME_RATING } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryGameSlug
// ====================================================

export interface QueryGameSlug_games_gallery {
  __typename: "UploadFile";
  src: string;
  label: string | null;
}

export interface QueryGameSlug_games_cover {
  __typename: "UploadFile";
  src: string;
}

export interface QueryGameSlug_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryGameSlug_games_publisher {
  __typename: "Publisher";
  name: string;
}

export interface QueryGameSlug_games_categories {
  __typename: "Category";
  name: string;
}

export interface QueryGameSlug_games_platforms {
  __typename: "Platform";
  name: string;
}

export interface QueryGameSlug_games {
  __typename: "Game";
  name: string;
  short_description: string;
  description: string;
  price: number;
  rating: ENUM_GAME_RATING | null;
  release_date: any | null;
  gallery: QueryGameSlug_games_gallery[];
  cover: QueryGameSlug_games_cover | null;
  developers: QueryGameSlug_games_developers[];
  publisher: QueryGameSlug_games_publisher | null;
  categories: QueryGameSlug_games_categories[];
  platforms: QueryGameSlug_games_platforms[];
}

export interface QueryGameSlug {
  games: QueryGameSlug_games[];
}

export interface QueryGameSlugVariables {
  slug: string;
}
