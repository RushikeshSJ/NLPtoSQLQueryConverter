**NLPtoSQL Query Converter**

Welcome to the NLPtoSQL Query Converter project! This full-stack application transforms natural language inputs into SQL queries. Built using Spring Boot for the backend and ReactJS for the frontend, it integrates the OpenAI API to simplify database querying for users without SQL expertise.

**🚀 Features**
1. Intuitive NLP Integration: Converts plain English queries into SQL commands.
2. Full-Stack Architecture:
  Backend: Spring Boot REST API with seamless OpenAI integration.
  Frontend: ReactJS for a dynamic, user-friendly interface.
3. Customizable Database Support: Supports schema-specific adjustments.
4. Real-Time Query Results: Executes generated SQL queries (optional) and displays the output.

**📋 Prerequisites**
**1. Backend:**
  Java 17+ installed.
  Maven for dependency management.
  OpenAI API Key: Sign up for an OpenAI account and generate an API key.

**2. Frontend:**
  Node.js and npm installed.

**3. Database:**
  A relational database like MySQL or PostgreSQL (or your preferred choice).

**🛠️ Installation**
**Backend Setup (Spring Boot):**
**1. Clone the Repository:**
   https://github.com/RushikeshSJ/NLPtoSQLQueryConverter.git
   cd NLPtoSQL-Query-Converter/backend  

**2. Configure Environment Variables:**
Update the application.properties file in src/main/resources:
openai.api.key=your_openai_api_key  
database.url=jdbc:mysql://localhost:3306/your_database  
database.username=your_db_username  
database.password=your_db_password

**3. Build and Run:**
    mvn clean install  
    mvn spring-boot:run  

**Frontend Setup (ReactJS):**
**1. Navigate to the Frontend Directory:**
   cd ../frontend  
**2. Install Dependencies:**
  npm install  
**3. Start the Development Server:**
  npm start

**🔧 Usage**
1. Access the application at http://localhost:3000.
2. Enter a natural language query, such as:
    Could you show all customers who made purchases in December 2023?  
3. View the generated SQL query in real-time:
   SELECT * FROM customers WHERE purchase_date LIKE '2023-12%';  
4. Execute the query and view the results in the UI.

**🗂️ File Structure**
NLPtoSQL-Query-Converter/  
├── backend/               # Spring Boot backend  
│   ├── src/               # Source code  
│   └── pom.xml            # Maven configuration  
├── frontend/              # ReactJS frontend  
│   ├── src/               # Source code  
│   └── package.json       # Dependencies  
├── README.md              # Documentation  

**🌟 Features to Explore**
1. Schema Customization: Configure backend prompts for your database.
2. Enhanced Query Execution: Support for JOINs, aggregations, and nested queries.
3. Error Handling: Graceful responses for unsupported queries or API errors.

**🛡️ License**
1. This project is licensed under the Apache License.

**🤝 Contributing**
1. Contributions are welcome! Feel free to open issues, suggest new features, or submit pull requests.

**📬 Contact**
If you have any questions, feel free to reach out:
**Email: rushikeshjadhav2018@gmail.com
Phone: +91 8788772381**

Enjoy transforming natural language into powerful SQL queries with NLPtoSQL Query Converter! 🎉


   






  
