export const baseURL =
  process.env.NODE_ENV === "production"
    ? "http://生产环境域名"
    : "http://localhost:3000";
