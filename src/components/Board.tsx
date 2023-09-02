import { Tile } from ".";
import { occupyTile } from "../engine";
import { Edge, Glyph, TileKind } from "../types";
import { numToEdgeType } from "../utils";

const NUM_ROWS = 3;
const NUM_COLS = 3;

const rows = new Array(NUM_ROWS).fill(0).map((_, i) => i);
const cols = new Array(NUM_ROWS).fill(0).map((_, i) => i);

type Props = { hasSuperTiles?: boolean };

let turns = 0;
const glyphs: [Glyph, Glyph] = ["X", "0"];
let selectedSuperTileEdge: Edge | undefined = undefined;

export default function Board({ hasSuperTiles = true }: Props) {
  const subBoard: (() => JSX.Element) | undefined = (() => {
    if (!hasSuperTiles) return undefined;
    return () => (
      <div class="scale-50">
        <Board hasSuperTiles={false} />
      </div>
    );
  })();

  const handleTileHover = (tile: { kind: TileKind; edge: Edge }) => {
    if (tile.kind === "regular-tile") return;
    selectedSuperTileEdge = { type: tile.edge.type };
  };

  const handleTileClick = (tile: { kind: TileKind; edge: Edge }) => {
    if (tile.kind === "super-tile") return;
    if (!!tile.edge.occupiedBy) return;
    if (!selectedSuperTileEdge) return;

    const glyph = glyphs[turns % 2]!;
    const occupiedEdge = occupyTile(tile.edge, glyph);
    turns++;

    console.log(occupiedEdge);

    const tileComponent = document
      ?.querySelector(`#super-tile-${selectedSuperTileEdge.type}`)
      ?.querySelector(`#regular-tile-${tile.edge.type}`);
    if (tileComponent)
      tileComponent.innerHTML = createTileComponent(occupiedEdge).innerHTML;
  };

  const createTileComponent = (edge: Edge) => (
    <Tile
      edge={edge}
      board={subBoard}
      onClick={handleTileClick}
      onHover={handleTileHover}
    />
  );

  return (
    <div class="flex flex-col">
      {rows.map((row) => (
        <div class="flex flex-row">
          {cols.map((col) =>
            createTileComponent({ type: numToEdgeType(row * NUM_COLS + col) })
          )}
        </div>
      ))}
    </div>
  );
}
