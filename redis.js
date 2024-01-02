const redis = require("redis");
const redisClient = redis.createClient();

const main = async () => {
    redisClient.on("error", (err) => { console.log("Redis client error : ", err) });
    await redisClient.connect();
    redisClient.on('connect', function() {
        console.log('Connected!');
      });
    await redisClient.set("name", "Saurav");
    const name = await redisClient.get("name");
    console.log("Value in the redis is : ", name)
}

main();