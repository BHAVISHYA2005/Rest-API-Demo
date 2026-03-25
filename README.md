# Rest-API-Demo

A comprehensive REST API demonstration project built with Node.js and Express, showcasing best practices for API development, architecture, and deployment.

## 🚀 Features

- **RESTful API Design** - Proper HTTP methods and status codes
- **MVC Architecture** - Separation of concerns with routes, controllers, and models
- **Middleware System** - Custom middleware for authentication, validation, and error handling
- **Environment Configuration** - Secure environment variable management
- **Error Handling** - Centralized error handling and logging
- **Validation** - Input validation and sanitization
- **Database Ready** - Structure supports SQL/NoSQL integration

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Rest-API-Demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration.

## 📁 Project Structure

```
Rest-API-Demo/
├── src/
│   ├── routes/          # API route definitions
│   ├── controllers/     # Request handlers and business logic
│   ├── models/          # Data models and schemas
│   ├── middleware/      # Custom middleware functions
│   ├── utils/           # Utility functions and helpers
│   └── app.js          # Express app setup
├── public/              # Static files
├── server.js            # Server entry point
├── package.json         # Project dependencies
├── .env.example         # Example environment variables
├── .gitignore          # Git ignore rules
├── README.md           # This file
└── LEARNING_JOURNEY.md # Learning documentation
```

## 🚀 Quick Start

1. **Start the server**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`

2. **Development mode with auto-reload**
   ```bash
   npm run dev
   ```

3. **Run tests**
   ```bash
   npm test
   ```

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Example Endpoints

#### Get all items
```http
GET /api/items
```

#### Get item by ID
```http
GET /api/items/:id
```

#### Create new item
```http
POST /api/items
Content-Type: application/json

{
  "name": "Example Item",
  "description": "Item description"
}
```

#### Update item
```http
PUT /api/items/:id
Content-Type: application/json

{
  "name": "Updated Item",
  "description": "Updated description"
}
```

#### Delete item
```http
DELETE /api/items/:id
```

## 🔒 Security Features

- Environment variable protection
- Input validation and sanitization
- Error message sanitization
- CORS configuration
- HTTP headers security

## 🧪 Testing

The project structure supports integration and unit testing:

```bash
npm test
npm run test:coverage
```

## 📖 Learning Resources

See `LEARNING_JOURNEY.md` for detailed learning guides and concepts covered in this project.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For issues and questions, please open an issue on the GitHub repository.

## 🎓 Learning Objectives

This project demonstrates:

- RESTful API principles and best practices
- Node.js and Express fundamentals
- Middleware pattern and implementation
- MVC architecture
- Error handling and validation
- Environment configuration
- Project structure and organization
- Code modularity and reusability

## 🔄 Version History

- **v1.0.0** - Initial release with basic REST API structure

---

**Happy Learning!** 🎉