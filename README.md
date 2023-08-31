

Build & deploy Solidity
```sh
npm i
npm run build
npm run deploy
```

Build & deploy wasm
```sh
(cd contracts/xvm-call && cargo contract build --release)
open target/ink/
open "https://contracts-ui.substrate.io/?rpc=wss://rpc.shibuya.astar.network"
```

