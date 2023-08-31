import { Tile } from ".";
import { numToEdge } from "../utils";

const NUM_ROWS = 3;
const NUM_COLS = 3;

const rows = new Array(NUM_ROWS).fill(0).map((_, i) => i);
const cols = new Array(NUM_ROWS).fill(0).map((_, i) => i);

type Props = { hasSuperTiles?: boolean };

export default function Board({ hasSuperTiles = true }: Props) {
  const subBoard: (() => JSX.Element) | undefined = (() => {
    if (!hasSuperTiles) return undefined;
    return () => (
      <div class="scale-50">
        <Board hasSuperTiles={false} />
      </div>
    );
  })();

  return (
    <div class="flex flex-col">
      {rows.map((row) => (
        <div class="flex flex-row">
          {cols.map((col) => (
            <Tile
              edge={numToEdge(row * NUM_COLS + col)}
              board={subBoard}
              onClick={() => {}}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
