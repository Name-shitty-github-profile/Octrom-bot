export default {
    token:  "Ur token",
    Languages: [
        {"English": "../src/languages/English.toml"}
    ],
    database: {
        mode: "MongoDB",
        // MongoDB or MySQL (Please use MySQL)
        MongoDb_Access: "ur mongodb url",
        // optional one, if you use MySQL, you can remove it or leave it blank
        MySQL_Access: "Your MySQL database File"
        // Optional one, if you use MongoDB, you can remove it or leave it blank
    }
};