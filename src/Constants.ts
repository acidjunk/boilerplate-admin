const API_URL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:8080/api"
        : "https://postgres-boilerplate.renedohmen.nl/api";

export default API_URL;
