# Wildlife Photography Platform

## Overview
Welcome to the Wildlife Photography Platform, a comprehensive application designed to connect wildlife enthusiasts with photographers dedicated to showcasing the beauty of nature through stunning imagery. This platform serves as a hub for sharing, exploring, and appreciating wildlife photography.

## Features
- User-friendly interface for both photographers and nature lovers.
- Advanced searchable gallery for browsing photographs by species, location, and photographer.
- User accounts with profile management and photo uploads.
- Community features including comments, likes, and photography contests.
- API for seamless integrations with other applications.

## Tech Stack
- Frontend: React.js
- Backend: Node.js with Express
- Database: MongoDB
- Authentication: Auth0
- Hosting: Heroku

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Wildlife-Photography-Platform-KU-IP-Final.git
   cd Wildlife-Photography-Platform-KU-IP-Final
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables by creating a `.env` file in the root directory and adding your configurations.
4. Start the application:
   ```bash
   npm start
   ```

## Setup
- Ensure that MongoDB is running either locally or via a cloud service like MongoDB Atlas.
- Set up Auth0 for user authentication. Register your application on the Auth0 dashboard to obtain the necessary API keys.

## API Documentation
Detailed API documentation can be found in the `docs` folder. It covers:
- Endpoints structure
- Request and response formats
- Authentication process

## Database Schema
The database schema is defined in `models` folder and includes:
- User
- Photo
- Comment
- Like

## Auth0 Configuration
To configure Auth0:
1. Create a new application in your Auth0 dashboard.
2. Set callback URLs and other parameters as required.
3. Integrate Auth0 into the application following the guidelines in the documentation.

## Troubleshooting
- If you encounter issues, check the following:
  - Ensure all environment variables are set correctly.
  - Verify that MongoDB is connected and accessible.
  - Review the console logs for any errors during startup.

## Contributing Guidelines
We welcome contributions from the community. Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Test your changes thoroughly.
4. Submit a pull request detailing your changes and improvements.

## Support Information
For support, please reach out to the repository owner or raise an issue on this GitHub repository. We appreciate your feedback and support!