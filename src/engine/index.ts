import { Board, Edge, EdgeType, Glyph } from "../types";

export const occupyTile = (edge: Edge, glyph: Glyph): Edge => {
  if (edge.occupiedBy) return edge;
  return { ...edge, occupiedBy: glyph };
};

export const checkWinner = (glyph: Glyph, board: Board) => {
  const [
    topLeft,
    topMid,
    topRight,
    left,
    mid,
    right,
    bottomLeft,
    bottomMid,
    bottomRight,
  ] = board;

  const checkOccupied = <T extends EdgeType | never = never>(edge: Edge<T>) =>
    edge.occupiedBy === glyph;

  return [
    [topLeft, topMid, topRight].map(checkOccupied),
    [left, mid, right].map(checkOccupied),
    [bottomLeft, bottomMid, bottomRight].map(checkOccupied),
    [topLeft, left, bottomLeft].map(checkOccupied),
    [topMid, mid, bottomMid].map(checkOccupied),
    [topRight, right, bottomRight].map(checkOccupied),
    [topLeft, mid, bottomRight].map(checkOccupied),
    [topRight, mid, bottomLeft].map(checkOccupied),
  ].some((combo) => combo.every((occupied) => !!occupied));
};
