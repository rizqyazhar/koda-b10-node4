/**
 *
 * @typedef User
 * @type {object}
 * @property {number} id
 * @property {string} name
 * @property {string} username
 * @property {string} email
 * @property {object} address
 * @property {string} address.street
 * @property {string} address.suite
 * @property {string} address.city
 * @property {string} address.zipcode
 * @property {object} address.geo
 * @property {string} address.geo.lat
 * @property {string} address.geo.lng
 * @property {string} phone
 * @property {string} website
 * @property {object} company
 *
 */

/**
 *
 * @param {User[]} data
 * @param {string} name
 * @returns {array}
 */
function filter(data, name) {
  const filteredData = data?.filter((user) =>
    user.name.toLowerCase().includes(name),
  );
  return filteredData;
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    const filteredData = filter(data, "clement").map((d) => d.name);
    console.log(filteredData);
  });
