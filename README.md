# CloudFront No Robots Lambda
NodeJS Lambda function that adds a `X-Robots-Tag` to CloudFront viewer responses, instructing search engines not to index the response.

The `X-Robots-Tag` header will be returned on all responses. If you need to conditionally return the header dependent on the request, consider adding some additional logic to [index.js](src/index.js). Or, if you are using S3 as an origin set headers on specific objects and return headers in the function based upon those.

### Setup

1. Deploy the function to Lambda in the `us-east-1` region and publish a new version.
2. Set the trust entities on the Lambda functions role in IAM.
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": [
          "lambda.amazonaws.com",
          "edgelambda.amazonaws.com"
        ]
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```
3. Associate the functions latest version ARN to your CloudFront distributions viewer response.
4. Run an invalidation if you have CloudFront caching enabled.
