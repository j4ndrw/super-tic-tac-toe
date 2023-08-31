import { Board } from "./components";

export default function App() {
  return (
    <div class="w-screen h-screen flex justify-center items-center flex-col">
      <h1 class="text-6xl">Super Tic-Tac-Toe</h1>
      <div class="m-16">
        <Board />
      </div>
    </div>
  );
}
