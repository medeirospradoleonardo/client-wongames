/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateWishlistInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutatioUpdateWishlist
// ====================================================

export interface MutatioUpdateWishlist_updateWishlist_wishlist_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface MutatioUpdateWishlist_updateWishlist_wishlist_games_developers {
  __typename: "Developer";
  name: string;
}

export interface MutatioUpdateWishlist_updateWishlist_wishlist_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: MutatioUpdateWishlist_updateWishlist_wishlist_games_cover | null;
  developers: MutatioUpdateWishlist_updateWishlist_wishlist_games_developers[];
  price: number;
}

export interface MutatioUpdateWishlist_updateWishlist_wishlist {
  __typename: "Wishlist";
  id: string;
  games: MutatioUpdateWishlist_updateWishlist_wishlist_games[];
}

export interface MutatioUpdateWishlist_updateWishlist {
  __typename: "updateWishlistPayload";
  wishlist: MutatioUpdateWishlist_updateWishlist_wishlist | null;
}

export interface MutatioUpdateWishlist {
  updateWishlist: MutatioUpdateWishlist_updateWishlist | null;
}

export interface MutatioUpdateWishlistVariables {
  input: updateWishlistInput;
}
