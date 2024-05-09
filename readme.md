### Travel Activity Planner

#### Overview

The Travel Activity Planner is a web application designed to simplify the process of planning day itineraries in new cities or destinations. Leveraging generative AI technology, this tool generates personalized day plans tailored to travelers' preferences, interests, and budget constraints. It recommends places to visit, activities to engage in, restaurants to dine at, and transportation options for seamless exploration, providing a comprehensive guide for a memorable travel experience. Moreover, it highlights exclusive activities and discounts available to card members, enriching the travel experience further.

#### Tech Stack

- **Frontend:**

  - React.js
  - HTML/CSS
  - JavaScript

- **Backend:**

  - Node.js
  - Express.js
  - MongoDB (Database)

- **Generative AI Frameworks:**

  - OpenAI GPT
  - Transformers

- **Location-based Services APIs:**
  - Google Maps API

#### Project Structure

travel-activity-planner/
│
├── frontend/ # Frontend React App
│ ├── public/ # Public assets and index.html
│ └── src/ # Source files
│ ├── components/ # React components
│ ├── App.js # Main component
│ ├── index.js # Entry point
│ └── ...
│
├── backend/ # Backend Node.js App
│ ├── controllers/ # Controllers handling API logic
│ ├── models/ # Database models
│ ├── routes/ # API routes
│ ├── utils/ # Utility functions
│ ├── app.js # Express app setup
│ └── ...
│
├── models/ # Generative AI models
│ ├── gpt_model.py # OpenAI GPT model
│ └── ...
│
├── database/ # Database configuration
│ └── ...
│
└── README.md # Project README

#### Tasks

1. **Design and Develop Generative AI Model:**

   - Implement a generative AI model capable of generating personalized travel itineraries based on user preferences.

2. **Integrate Location-based Services APIs:**

   - Utilize the Google Maps API to retrieve information about attractions, restaurants, and transportation options in the specified location.

3. **Implement Backend API:**

   - Develop RESTful APIs using Node.js and Express.js to handle user requests, process data, and interact with the database.

4. **Set Up Database:**

   - Use MongoDB to store user preferences, generated itineraries, and other relevant data.

5. **Create User-friendly Interface:**

   - Design and develop a responsive user interface using React.js to allow travelers to input their preferences and view generated day plans effortlessly.

6. **Test and Optimize:**
   - Conduct thorough testing to ensure accuracy, relevance, and usability of the travel activity planner. Optimize the application based on user feedback and testing results.
# Travel-Activity
