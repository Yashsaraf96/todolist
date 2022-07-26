exports.getDate = function() {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  return today.toLocaleString("en-US", options);
};
