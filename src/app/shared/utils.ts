import { FileItem } from "../file-commander/model/file-item";

export function clone(item: FileItem) {
  return JSON.parse(JSON.stringify(item));
}

export function convertArrayToMap(arrayInput: any[], keyName: string, valuesAsArray: boolean = false) {
  return arrayInput.reduce((map, obj) => {
    let items = [];
    if (valuesAsArray) {
      if (map[obj[keyName]]) {
        map[obj[keyName]].push(obj);
      } else {
        map[obj[keyName]] = [obj];
      }
    } else {
      map[obj[keyName]] = obj;
    }
    return map;
  }, {});

}
