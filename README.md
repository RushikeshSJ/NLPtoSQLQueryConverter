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




  
