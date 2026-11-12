/**
 *
 * @typedef User
 * @type {object}
 * @property {number} id
 * @property {string} name
 * @property {string} username
 * @property {string} email
 * @property {object} address
 * @property {string} phone
 * @property {string} website
 * @property {object} company
 *
 */

/**
 *
 * @param {Object[]} data
 * @param {string} data[].name
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
