const {Router} = require("express");
const createPostHandler = require("../handlers/postsHandler");

const postsRouter = Router();

postsRouter.post("/post", createPostHandler);

module.exports = postsRouter;