
if (window.location.href.includes("form.html")) {
    require("./form");
} else {
    const { fetchData } = require("./fetchData");
    const URL = "http://localhost:3000/movies";
    fetchData(URL); 
}
