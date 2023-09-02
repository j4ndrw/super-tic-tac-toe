import { Edge, TileKind } from "../types";

type Props = {
  edge: Edge;
  board?: (() => JSX.Element) | undefined;
  selected?: boolean;
  onHover: (tile: { kind: TileKind; edge: Edge }) => void;
  onClick: (tile: { kind: TileKind; edge: Edge }) => void;
};

const TileContainer = ({
  children,
  kind,
  edge,
  onClick,
  onHover,
}: {
  children: JSX.Element | JSX.Element[] | undefined;
  kind: TileKind;
  edge: Edge;
  onHover: () => void;
  onClick: () => void;
}) => (
  <div
    id={`${kind}-${edge.type}`}
    onMouseEnter={onHover}
    onClick={onClick}
    class={`flex justify-center items-center border border-black ${(() => {
      switch (kind) {
        case "super-tile":
          return "w-32 h-32 hover:bg-gray-50";
        case "regular-tile":
          return "w-16 h-16 hover:bg-gray-200";
      }
    })()} ${(() => {
      switch (edge.type) {
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
    {children}
  </div>
);

export default function ({ edge, board: Board, onHover, onClick }: Props) {
  const kind: TileKind = Board ? "super-tile" : "regular-tile";

  return (
    <TileContainer
      kind={kind}
      edge={edge}
      onHover={() => onHover({ kind, edge })}
      onClick={() => onClick({ kind, edge })}
    >
      {Board ? <Board /> : <div>{edge.occupiedBy}</div>}
    </TileContainer>
  );
}
