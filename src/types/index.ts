export type EdgeType =
  | "top-left"
  | "left"
  | "bottom-left"
  | "top-mid"
  | "mid"
  | "bottom-mid"
  | "top-right"
  | "right"
  | "bottom-right";
export type Edge<T extends EdgeType = EdgeType> = {
  type: T;
  occupiedBy?: Glyph | undefined;
};

export type Board = [
  Edge<"top-left">,
  Edge<"top-mid">,
  Edge<"top-right">,
  Edge<"left">,
  Edge<"mid">,
  Edge<"right">,
  Edge<"bottom-left">,
  Edge<"bottom-mid">,
  Edge<"bottom-right">
];

export type TileKind = "super-tile" | "regular-tile";

export type Glyph = "X" | "0";

export type GameState = "not-started" | "started" | "game-over";
