import { Edge, TileKind } from "../types";

type Props = {
  edge: Edge;
  board?: (() => JSX.Element) | undefined;
  selected?: boolean;
  onClick: (tile: { kind: TileKind; edge: Edge }) => void;
};

export default function ({ edge, board: Board }: Props) {
  const kind: TileKind = Board ? "super-tile" : "regular-tile";

  return (
    <div
      class={`flex justify-center items-center border border-black ${(() => {
        switch (kind) {
          case "super-tile":
            return "w-32 h-32 hover:bg-gray-50";
          case "regular-tile":
            return "w-16 h-16 hover:bg-gray-200";
        }
      })()} ${(() => {
        switch (edge) {
          case "top-left":
            return "border-t-0 border-l-0";
          case "left":
            return "border-l-0";
          case "bottom-left":
            return "border-b-0 border-l-0";
          case "top-mid":
            return "border-t-0";
          case "mid":
            return "";
          case "bottom-mid":
            return "border-b-0";
          case "top-right":
            return "border-t-0 border-r-0";
          case "right":
            return "border-r-0";
          case "bottom-right":
            return "border-b-0 border-r-0";
        }
      })()}`}
    >
      {Board ? <Board /> : <></>}
    </div>
  );
}
