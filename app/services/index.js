import {promises as fs} from "fs";

// All data is controlled by this service
let data =[];
const rootPath = new URL("../../", import.meta.url).pathname;

// This method can be imported and used by other files to get access to the data
export const index = () => data;

// IIFE - Immediately Invoked Function Expression
// This loads data from a data source
;(async () => {
    data = JSON.parse(await fs.readFile(`${rootPath}/db.json`, "utf8"));
    console.log(data);
  })();