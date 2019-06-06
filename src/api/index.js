import axios from "axios";

const apiUrl = `https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true`;

const getData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(apiUrl)
      .then(result => {
        resolve(result.data);
      })
      .catch(result => {
        reject(result.status);
      });
  });
};

export default { getData };
