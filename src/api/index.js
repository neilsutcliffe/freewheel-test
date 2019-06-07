import axios from "axios";

const apiUrl = `https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true`;
const bikeApiUrl = `https://api.tfl.gov.uk/BikePoint/Search?query=`;

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

const searchBike = query => {
  return new Promise((resolve, reject) => {
    axios
      .get(bikeApiUrl + query)
      .then(result => {
        resolve(result.data);
      })
      .catch(result => {
        reject(result.status);
      });
  });
};

export default { getData, searchBike };
