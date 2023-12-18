---
sidebar_position: 1
---
# Connect to the Vega API
###  How to Connect to the Vega API
The VegaCloud API is a beta version of our application's backend service that allows users to manage policies and permissions within the application. This API provides endpoints for creating, updating, listing, and deleting policies, as well as obtaining lists of permissions for users and roles.

JWT (JSON Web Token) Authentication:

To ensure secure access to the API, we utilize JWT (JSON Web Token) authentication. When users log in, they receive a JWT token, which they must include in the Authorization header of their HTTP requests to access the protected endpoints. The token is validated to verify the user's identity and permissions.

Note:

This API is currently in its beta version, and as such, certain aspects and functionalities may be subject to change before the official release of version 1.0. Feedback and insights from users during this beta phase are valuable in enhancing the API's performance, security, and user experience.

You may use curl to connect to the authentication endpoint for your Organization realm to generate a JWT Token. 

```bash
JWTTOKEN=$(curl -L -X POST 'https://devauth.vegacloud.io/realms/<orgslug>/protocol/openid-connect/token' -H 'Content-Type: application/x-www-form-urlencoded' --data-urlencode 'client_id=portal' --data-urlencode 'grant_type=password' --data-urlencode 'username=<yourloginid>' -- data-urlencode 'password=<yourpassword>' | jq --raw-output .access_token)
```
Required Parameters include:
- orgslug: The slug of your Organization
- yourloginid: Your login ID
- yourpassword: Your password

The JWTTOKEN variable will contain the JWT Token that you will use to authenticate your requests to the API.

### Connecting to the API
Here is an example using the JWT TOKEN variable to get all spaces for your Organization:
```bash
curl -X 'GET' --url 'https://api.vegacloud/vegaapi/spaces' --header "Authorization: Bearer ${JWTTOKEN}"
```