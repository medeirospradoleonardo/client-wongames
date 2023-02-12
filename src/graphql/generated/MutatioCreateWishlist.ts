/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createWishlistInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutatioCreateWishlist
// ====================================================

export interface MutatioCreateWishlist_createWishlist_wishlist_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface MutatioCreateWishlist_createWishlist_wishlist_games_developers {
  __typename: "Developer";
  name: string;
}

export interface MutatioCreateWishlist_createWishlist_wishlist_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: MutatioCreateWishlist_createWishlist_wishlist_games_cover | null;
  developers: MutatioCreateWishlist_createWishlist_wishlist_games_developers[];
  price: number;
}

export interface MutatioCreateWishlist_createWishlist_wishlist {
  __typename: "Wishlist";
  id: string;
  games: MutatioCreateWishlist_createWishlist_wishlist_games[];
}

export interface MutatioCreateWishlist_createWishlist {
  __typename: "createWishlistPayload";
  wishlist: MutatioCreateWishlist_createWishlist_wishlist | null;
}

export interface MutatioCreateWishlist {
  createWishlist: MutatioCreateWishlist_createWishlist | null;
}

export interface MutatioCreateWishlistVariables {
  input: createWishlistInput;
}
