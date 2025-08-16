# API Testing with Playwright

A comprehensive API testing suite built with Playwright and JavaScript, demonstrating best practices for REST API testing.

## 🚀 Features

- **Comprehensive API Testing**: Covers GET, POST, PUT, PATCH, DELETE operations
- **Error Handling**: Tests for 404, 500, and validation errors
- **Data-Driven Testing**: Multiple test scenarios with different data sets
- **Helper Functions**: Reusable code for common operations
- **Professional Reports**: HTML, JSON, and JUnit reports
- **CI/CD Ready**: Configured for continuous integration

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd api-testing-playwright
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npm run install-browsers
```

## �� Running Tests

### Run all tests:
```bash
npm test
```

### Run specific test files:
```bash
# API core operations
npm run test:api

# Error handling tests
npm run test:error

# Data-driven tests
npm run test:data
```

### Run with UI:
```bash
npm run test:ui
```

### Run in headed mode:
```bash
npm run test:headed
```

### Debug mode:
```bash
npm run test:debug
```

## 📊 Reports

After running tests, view the HTML report:
```bash
npm run report
```

Reports are generated in the `reports/` directory:
- `test-results.json` - JSON format
- `junit.xml` - JUnit format
- HTML report - Interactive web report

## ��️ Project Structure
