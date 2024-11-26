# Backend_Authentication_System
Task Description: Building a Backend Authentication System
Objective
Your task is to design and implement a backend authentication system using Express.js, Mongoose, JWT,
and cookies. The system should include the following functionalities:
. User Signup: Allow users to create accounts.
. User Login: Authenticate users and provide a token for secure access.
. Protected Route: Restrict access to certain routes only for authenticated users.
. Password Security: Ensure passwords are securely stored using hashing.
. Cookie Management: Use HTTP-only cookies for storing authentication tokens.
Requirements
. Signup Endpoint (/signup):
Accept user details (username, email, password) in the request body.
Hash the password before saving it to the database.
Store user information in the database.
Return a response confirming the user was created.
. Login Endpoint (/login):
Accept user credentials (email, password) in the request body.
Verify the credentials against stored data in the database.
If valid, generate a JWT token and store it in an HTTP-only cookie.
Return a response indicating successful login.
. Protected Route (/profile):
Restrict access to the route using middleware.
Middleware should:
Validate the JWT token from the cookie.
Allow access only if the token is valid.
Return the authenticated user's details (excluding the password).
. Error Handling:
Handle cases like:
Email already in use during signup.
Invalid credentials during login.
Missing or invalid tokens during protected route access.
Return appropriate HTTP status codes and error messages.
Constraints
Use ES6+ syntax.
1/2README.md
2024-11-25
Password hashing must be done in the controller, not in the Mongoose schema.
The project must have a clear folder structure:
Models for defining database schemas.
Controllers for implementing business logic.
Routes for defining endpoints.
Middlewares for token validation.
Testing
Test the system using Postman:
Signup a user.
Login with the created user credentials.
Access the /profile route both with and without authentication.
Test edge cases like duplicate signup, incorrect login, and unauthorized access.
Deliverables
A functioning backend server with the following:
Signup Endpoint
Login Endpoint
Protected Route
Detailed documentation on:
How the system works.
How to test each endpoint with Postman.
Evaluation Criteria
Proper implementation of authentication logic.
Code readability and structure.
Error handling and security practices.
Successful testing of all endpoints.
