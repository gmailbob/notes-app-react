const dev = {
  STRIPE_KEY: "pk_test_51HFtLDFen514FqMDTYQXV7pnj7pA9DRL4ImBx7NyZ9KN4FjNKETroEBZ0YENAEQAqIScr1jNv6UNjk2vrPYRSItn00eFyzQ05u",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-488h3ub7jmyd"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://abytc7vb9i.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_KSTtSG6pV",
    APP_CLIENT_ID: "5si54cummeuerdlq41n0o243nn",
    IDENTITY_POOL_ID: "us-east-1:19ed3ed6-f662-4bb4-ba2d-703020436c4a"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HFtLDFen514FqMDTYQXV7pnj7pA9DRL4ImBx7NyZ9KN4FjNKETroEBZ0YENAEQAqIScr1jNv6UNjk2vrPYRSItn00eFyzQ05u",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-v5ihy79382b3"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://kvjrz17xo9.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_IBpj3uIYJ",
    APP_CLIENT_ID: "7ph7k923j12jgki89uk0e9arie",
    IDENTITY_POOL_ID: "us-east-1:7dd6f598-cffc-4160-b880-7041152536d5"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};