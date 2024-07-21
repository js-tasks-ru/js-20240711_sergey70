/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    const properties = Object.entries(obj);
    const filteredProperties = properties.filter(([key]) => fields.includes(key));
    const newObject = filteredProperties.reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, 
    {});
    
    return newObject;
};
