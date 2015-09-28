import ReactMiddleware from "react-middleware";

const middleware = ReactMiddleware({ base:"./src/site" });
// middleware.init();
middleware.start({ port: 3030 });
