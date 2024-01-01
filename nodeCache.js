const express = require('express')
const nodeCache = require('node-cache');
const cache = new nodeCache();
const app = express();

cache.set("name", "Gaurav");
const name = cache.get("name")

console.log("Name Of the user :", name);
app.listen(8000,()=>{
    console.log("Server is running on the port : 8000")
})
app.get("/getUsers", (req, res) => {
    console.log("Get users route called");
    if (cache.has("users")) {
        console.log("Already cached ");
        return res.json({ users: cache.get("users") })
    }

    for (i = 0; i < 4000000000; i++) { }
    cache.set("users", [1, 2, 3, 4, 5, 6, 7, 8, 9], 60);
    return res.json({ users: cache.get("users") })

})

