# Real Estate Web Application

This is a real estate web application developed in the MERN stack, which provides two views: one for the public audience and one for the admin.

## Features

### Admin View

The admin view is designed for managing various aspects of the real estate application. The main features of the admin view include:

- Property Management: The admin can manage different kinds of properties such as houses, plots, projects, and buildings.
- Project Blueprints (Maps): The admin can manage project blueprints, which provide visual representations of the projects.
- Supplies Management: The admin can manage supplies related to the real estate projects.

### Customer (Public Audience) View

The customer view is designed for the general public interested in real estate. The main features of the customer view include:

- Property Listings: Customers can visit the website and view all the available properties, including houses, plots, projects, and buildings.
- Project Maps: Customers can explore project blueprints (maps) to get a better understanding of the projects.
- Supplies Information: Customers can access information about supplies related to real estate projects.
- Quotation Requests: Customers can request a quotation for supplies by providing their contact details and a message. The request is sent to the official email using Email.js integration.

## Technical Stack

The real estate web application has been developed using the MERN stack, which consists of the following technologies:

- **MongoDB**: A document-oriented NoSQL database used for storing application data.
- **Express.js**: A backend web application framework used for building the server-side logic and APIs.
- **React**: A frontend JavaScript library used for building the user interface and components.
- **Node.js**: A JavaScript runtime environment used for executing server-side code.
- **JWT Authentication**: JSON Web Token (JWT) authentication is implemented for securing user authentication and authorization.

## Installation

To run the real estate web application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/real-estate-app.git`
2. Install the dependencies:
   - Navigate to the server folder: `cd server` and run `npm install`
   - Navigate to the client folder: `cd ../client` and run `npm install`
3. Configure the environment variables:
   - Create a `.env` file in the server folder and provide the necessary configuration details (database connection, email service credentials, etc.).
4. Start the development server:
   - In the server folder, run: `npm start`
   - In the client folder, run: `npm start`

Make sure you have MongoDB installed and running on your local machine.

## Contributing

Contributions to the real estate web application are welcome. If you encounter any issues or have suggestions for improvements, please submit them through the GitHub repository.

## License
All rights reserved. This real estate web application is the proprietary property of client. Unauthorized use, modification, or distribution of this application is strictly prohibited without prior written consent from the client.

