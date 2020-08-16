export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "zzy-notes-app-serverless-stack"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://zyzcjpdel0.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_B0AuJAMJD",
    APP_CLIENT_ID: "3k9lvnnfr1nrsgll5idqtl4t3",
    IDENTITY_POOL_ID: "us-east-1:2ce0a5ea-e4a6-43a8-a345-f6200b5798e1"
  },
  MAX_ATTACHMENT_SIZE: 5000000
};