/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  
  const copyArr = [...arr];
  const condition = param === 'desc'? -1: 1;   
  const sorting = ((a, b) => condition * a.localeCompare(b, ['ru', 'en'],{caseFirst: 'upper', sensitivity: 'variant'}));
      
  return copyArr.sort(sorting);
  
}
