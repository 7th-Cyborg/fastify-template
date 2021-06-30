function loadEnvVariable(keyName: string) {
  const envVar = process.env[keyName];

  if (envVar == null || envVar.length === 0) {
    throw new Error(`Must define ${keyName} as environment variable.`);
  }

  return envVar;
}

export default {
  SERVER_PORT: loadEnvVariable('SERVER_PORT'),
  MONGO_URI: loadEnvVariable('MONGO_URI'),
};