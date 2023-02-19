/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryOrder
// ====================================================

export interface QueryOrder_orders_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryOrder_orders_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryOrder_orders_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: QueryOrder_orders_games_cover | null;
  developers: QueryOrder_orders_games_developers[];
  price: number;
}

export interface QueryOrder_orders {
  __typename: "Order";
  id: string;
  created_at: any;
  card_brand: string | null;
  card_last4: string | null;
  games: QueryOrder_orders_games[];
}

export interface QueryOrder {
  orders: QueryOrder_orders[];
}

export interface QueryOrderVariables {
  identifier: string;
}
