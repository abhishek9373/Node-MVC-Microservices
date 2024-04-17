import dotenv from "dotenv";

const env = process.env.NODE_ENV ?? "dev";
dotenv.config({ path: "envs/.env." + env });

export const config = {
    RUN_ENV: env,
    NODE_HOST: process.env.NODE_HOST || "127.0.0.1",
    APP_PORT: process.env.APP_PORT,
    SERVICE_NAME: "service_name",
    SERVICE: {
        // all your service url's here
    },
    mysql: {
        DB: process.env.DB_NAME,
        port: process.env.DB_PORT,
        master_host: process.env.MASTER_HOST,
        master_user: process.env.MASTER_USER,
        master_password: process.env.MASTER_PASSWORD,
        slave_host: process.env.SLAVE_HOST,
        slave_user: process.env.SLAVE_USER,
        slave_password: process.env.SLAVE_PASSWORD,
        dialect: process.env.DIALECT,
    },
    apikey: {
        internal: process.env.API_KEY_INTERNAL,
    },
    aws: {
        endpoint: process.env.AWS_ENDPOINT || "",
        region: process.env.REGION,
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SECRET,
        s3: {
            baseUrl: "",
            bucket: "",
        },
        sqs: {
            queue_url: process.env.QUEUE_URL,
        },
        open_search: {
            search_url: process.env.SEARCH_URL,
            username: process.env.SEARCH_USERNAME,
            password: process.env.SEARCH_PASSWORD,
        },
    },
    opensearch_index: {
        sleep_index: process.env.INDEX_SLEEP,
        activity_index: process.env.INDEX_ACTIVITY,
        workout_index: process.env.INDEX_WORKOUT,
        heart_rate_index: process.env.INDEX_HEART,
        hrv_index: process.env.INDEX_HRV,
        temperature_index: process.env.INDEX_TEMPERATURE,
        oxygen_index: process.env.INDEX_OXYGEN,
        respiration_index: process.env.INDEX_RESPIRATION,
    },
    apm: {
        secretToken: "",
        apiKey: "",
        serverUrl: process.env.APM_SERVER_URL,
    },
    secret: process.env.SECRET,
    expires: process.env.EXPIRES,
    REDIS: {
        WRITER_HOST: process.env.REDIS_WRITER_HOST,
        READER_HOST: process.env.REDIS_READER_HOST,
        PORT: process.env.REDIS_PORT,
    },
};
