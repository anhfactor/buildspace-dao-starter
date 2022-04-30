import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xAa8364C6D96726230b7D5bBD907E5713001e62eC");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Shiba Bone",
        description: "This NFT will give you access to MemeDAO!",
        image: readFileSync("scripts/assets/bone.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();