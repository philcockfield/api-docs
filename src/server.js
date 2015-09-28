import ReactServerPages from "react-server-pages";

const middleware = ReactServerPages({ base:"./src/site" });
middleware.start({ port: 3030 });
