# serverless-cognito-boilerplate

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
[![codecov](https://codecov.io/gh/rpidanny/serverless-cognito-boilerplate/branch/master/graph/badge.svg?token=Mfp8PQYgIL)](https://codecov.io/gh/rpidanny/serverless-cognito-boilerplate) [![Build Status](https://travis-ci.org/rpidanny/serverless-cognito-boilerplate.svg?branch=master)](https://travis-ci.org/rpidanny/serverless-cognito-boilerplate)

Boilerplate for serverless authenticated applications.

Frontend boilerplate that accompanies this can be found [here](https://github.com/rpidanny/serverless-cognito-ui-boilerplate).

Demo [https://serverlessdemo.abhishek.pro.np](https://serverlessdemo.abhishek.pro.np)

## Includes

### Resources

- [Cognito User Pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html)
- [Cognito Identity Pool](https://docs.aws.amazon.com/cognito/latest/developerguide/identity-pools.html)
- [S3 Data Bucket](https://aws.amazon.com/s3)
- [DynamoDB Table](https://aws.amazon.com/dynamodb)
- [API Gateway](https://aws.amazon.com/api-gateway)

### Functions

- `helloworld` : for auth / api tests.

### Linting

- eslint / prettier

### Unit Tests

- jest

### Code Coverage

- [codecov](https://codecov.io)

## Note

### Deployment Issue

Serverless deploy fails when the `apiGateway` tracing is enabled when you deploy it for the first time. As mentioned in [https://github.com/serverless/serverless/issues/6081](https://github.com/serverless/serverless/issues/6081).

So, comment out `apiGateway` tracing in `serverless.yml` for the first deploy. Then you can enable it for subsequent deploys.
