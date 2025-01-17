const getEnvConfig = () => {
  const env = process.env.NODE_ENV;

  if (env == "development") {
    return process.env.NEXT_PUBLIC_DEV_API_URL;
  }
  if (env == "production") {
    return process.env.NEXT_PUBLIC_PROD_API_URL;
  }
};

export default getEnvConfig;
