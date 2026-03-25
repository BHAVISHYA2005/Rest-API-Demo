# REST API Learning Journey

## Overview
This project demonstrates the complete lifecycle of building a professional REST API using Node.js and Express.js. It serves as an educational resource for understanding API architecture, design patterns, and best practices.

## Learning Objectives

### 1. REST API Fundamentals
- Understanding REST principles and constraints
- HTTP methods (GET, POST, PUT, DELETE, PATCH)
- Status codes and their meanings
- Request/response structure
- Headers and content negotiation

### 2. Project Architecture
- MVC (Model-View-Controller) pattern
- Separation of concerns
- Middleware architecture
- Error handling and validation
- Async/await patterns

### 3. Core Components

#### Routes (`src/routes/`)
- Endpoint definition and structure
- Route organization and naming conventions
- Path parameters and query strings
- Request body handling

#### Controllers (`src/controllers/`)
- Business logic implementation
- Request handling and response formatting
- Data validation and transformation
- Error handling

#### Models (`src/models/`)
- Data structure definition
- Validation schemas
- Type safety and constraints
- Relationships and associations

#### Middleware (`src/middleware/`)
- Authentication and authorization
- Logging and monitoring
- Error handling
- Request validation
- CORS and security headers

#### Utilities (`src/utils/`)
- Helper functions
- Constants and configuration
- Response formatting
- Error utilities

### 4. Best Practices Covered

#### Code Organization
- Modular structure
- Clear naming conventions
- Consistent file organization
- Separation of concerns

#### Error Handling
- Centralized error handling
- Custom error classes
- Proper HTTP status codes
- Meaningful error messages

#### Validation
- Input validation
- Schema validation
- Type checking
- Business rule enforcement

#### Security
- Environment variables
- Input sanitization
- Rate limiting ready
- CORS configuration

#### Testing Ready
- Clear dependencies
- Mockable components
- Isolated business logic
- Easy to test controllers

## Project Structure

```
Rest-API-Demo/
├── src/
│   ├── routes/          # API endpoint definitions
│   ├── controllers/     # Business logic handlers
│   ├── models/          # Data models and schemas
│   ├── middleware/      # Custom middleware functions
│   └── utils/           # Helper utilities
├── public/              # Static files
├── package.json         # Dependencies and scripts
├── .env.example         # Environment variable template
├── .gitignore          # Git ignore rules
├── server.js           # Entry point
├── README.md           # Project documentation
└── LEARNING_JOURNEY.md # This file
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Basic understanding of JavaScript

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start the server
npm start
```

### Development

```bash
# Run in development mode with hot reload
npm run dev

# Run tests
npm test

# Run linting
npm run lint
```

## Key Learning Topics

### 1. Express.js Fundamentals
- Setting up an Express server
- Creating routes and handlers
- Middleware usage and order
- Error handling middleware

### 2. RESTful Design Principles
- Resource-oriented design
- Proper use of HTTP verbs
- Status code selection
- Response formatting

### 3. Middleware Pattern
- Request preprocessing
- Response formatting
- Error handling
- Cross-cutting concerns

### 4. Data Validation
- Request body validation
- Query parameter validation
- Type checking
- Business rule validation

### 5. Error Handling Strategy
- Centralized error handling
- Error classification
- User-friendly error messages
- Proper logging

### 6. Configuration Management
- Environment variables
- Development vs production
- Sensitive data protection
- Configuration hierarchy

## Code Examples

### Creating a Route

```javascript
// src/routes/users.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET /api/users - Get all users
router.get('/', userController.getAllUsers);

// GET /api/users/:id - Get user by ID
router.get('/:id', userController.getUserById);

// POST /api/users - Create new user
router.post('/', userController.createUser);

// PUT /api/users/:id - Update user
router.put('/:id', userController.updateUser);

// DELETE /api/users/:id - Delete user
router.delete('/:id', userController.deleteUser);

module.exports = router;
```

### Creating a Controller

```javascript
// src/controllers/userController.js
const getAllUsers = async (req, res, next) => {
  try {
    // Business logic here
    res.json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Validation
    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }
    // Business logic
    res.json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  // ... other methods
};
```

### Custom Middleware

```javascript
// src/middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({
    error: {
      status,
      message,
      timestamp: new Date().toISOString()
    }
  });
};

module.exports = errorHandler;
```

## Common Patterns

### Try-Catch with Express Error Handling

```javascript
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});
```

### Response Formatting

```javascript
const sendSuccess = (res, data, statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    data
  });
};

const sendError = (res, error, statusCode = 500) => {
  res.status(statusCode).json({
    success: false,
    error: error.message
  });
};
```

## Next Steps

### Expand Your Knowledge
1. Add database integration (MongoDB, PostgreSQL)
2. Implement authentication (JWT, OAuth)
3. Add request validation library (Joi, Yup)
4. Implement rate limiting
5. Add comprehensive testing (Jest, Mocha)
6. Deploy to cloud platform (Heroku, AWS, etc.)

### Advanced Topics
- API versioning strategies
- Pagination and filtering
- Caching strategies
- Monitoring and logging
- API documentation (Swagger/OpenAPI)
- Performance optimization

## Resources

### Documentation
- [Express.js Guide](https://expressjs.com/)
- [REST API Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://httpwg.org/specs/rfc7231.html#status.codes)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

### Tools
- [Postman](https://www.postman.com/) - API testing
- [Insomnia](https://insomnia.rest/) - API client
- [Swagger Editor](https://editor.swagger.io/) - API documentation

## Conclusion

This project provides a solid foundation for building professional REST APIs. Focus on understanding the principles and patterns rather than memorizing the code. Practice by extending the API with new features and handling edge cases.

Happy learning! 🚀