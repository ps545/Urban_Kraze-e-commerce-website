const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AcGYjqcNGm9wBt9DPoFCO6eTha0UM3akgUbObm7Pahc5PM7c_Ij74UNnpJD6R9242tgdgXl1F4bLabkl",
  client_secret: "EGuZN9FkVkBw5g_q4wY8ATeruEHKzvECAdGbI8x-oE_NNJx8IqAbVmECCGX_NraW3RjfOjKUm7-vDDdK",
});

module.exports = paypal;
