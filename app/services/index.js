// Load the initial data
// Access the database when asked to do so.

import { promises as fs } from "fs";

// All data is controlled by this service
let data = [];
const rootPath = new URL("../../", import.meta.url).pathname;

// This method can be imported and used by other files to get access to the data
export const index = () => data;

export const show = (characterRoute) =>
  data.find((d) => d.route === characterRoute);

export const add = (newCharacter) => {
  const updatedData = [...data, newCharacter];
  // console.info(updatedData, "added a character");
  // fs.writeFile will overwrite the data
  fs.writeFile(`${rootPath}db.json`, JSON.stringify(updatedData, null, 2)).then(
    () => ({
      msg: "Wrote new character",
    })
  );
};

// IIFE - Immediately Invoked Function Expression
// This loads data from a data source
(async () => {
  data = JSON.parse(await fs.readFile(`${rootPath}/db.json`, "utf8"));
  // console.log(data);
})();
