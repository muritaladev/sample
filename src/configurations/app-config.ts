import { getEnv } from "./env.config";

export const AppConfig = {
    APP_NAME: process.env.APP_NAME || "Cloud function service",
    APP_SECRET: process.env.APP_SECRET || "",
    APP_PORT: Number(process.env.APP_PORT) || 8080,
    APP_HOST: process.env.APP_HOST || "0.0.0.0",
    APP_ENV: getEnv(),
};