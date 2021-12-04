---
sidebar_position: 2 
---

# Export Types

Currently there are very basic exporters available by default though the program

- `local/raw` - **DEFAULT** Exports the data produced from the parser as a raw `<entity>.json` at the designated `exportPath` config option. Default would be `./parsed/<entity>.json`
- `local/split` - **Experimental** Exports the data produced from the parser as split `<entity>/<id*>.json` files at the designated `exportPath` config option. Example would be `./parsed/weapon/11001.json`. **Note** this option currently only works for weapons and requires an id at top level array to split by.
