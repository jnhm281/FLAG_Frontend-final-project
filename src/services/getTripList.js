async function getTripList() {
  const response = await fetch("mockAPI/mockAPI.json");
  const result = await response.json();

  return result.trips;
}

export default {
  getTripList,
};
