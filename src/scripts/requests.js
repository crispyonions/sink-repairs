import { getRequests } from "./dataAccess.js";

const convertRequestToListElement = request => {
  return `<li>${request.description}</li>
  <li>
      ^Want to Delete This Request?^
      <button class="request__delete"
              id="request--${request.id}">
          Delete
      </button>
  </li>
`;
}; 
export const Requests = () => {
  const requests = getRequests();
  const listItems = requests.map(convertRequestToListElement).join("");
  return `
    <ul>
      ${listItems}
    </ul>
  `;
};
