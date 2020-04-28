# What is the Boardfinder app?

The Boardfinder app is a clone of the boardfinder that Burton Snowboards earlier had on their website for customers to receive recommendations on what snowboards from Burton by answering some questions about for example foot size, preferred riding style, riding experience etc. The Boardfinder app is a school project without any commercial purpose and is in a way be a tribute to Burton Snowboards. 

The application consists of an Angular client communicating with a Spring Boot microservices cluster backend. Some of the Spring Boot microservices utilize RabbitMQ as a message broker between two of the services and MySQL for storing/reading data. 

# Projects/Modules
This application consists of a number of projects:
Spring Boot 
Boardfinder-Service: https://github.com/ErikAneer/Boardfinder-Boardfinder-Service 
Boardfinder-APIGateway: https://github.com/ErikAneer/Boardfinder-APIGateway 
Boardfinder-Statistics-Service: https://github.com/ErikAneer/Boardfinder-Statistics-Service 
Boardfinder-User/Authentication-Service ????
Boardfinder-Service-Registry-Service: https://github.com/ErikAneer/Boardfinder-Service-Registry-Service 

# Angular
Boardfinder-Angular-Client: https://github.com/ErikAneer/Boardfinder-Angular-Client  

The application also utilize RabbitMQ Message Broker https://www.rabbitmq.com/ and MySQL https://www.mysql.com/ 

# How to run the Boardfinder App
Set up the Spring Boot projects
Download all the the Spring Boot projects and build them either in the IDE or by running the command 'mvn clean install' from the projects´ root folder. 
## Set up the Angular Client 
Download the Angular client.
## Download and install RabbitMQ and MySQL if not already installed
To run the application on localhost you also need to have RabbitMQ and MYSQL installed, download and install if needed. 

## Set up MySQL for the app
Use the MySQL Workbench to create the needed database schemas: boardfinder_stats,  boardfinder_boards and  boardfinder_users in the MySQL workbench 
For the app to be able to access the MySQL database a user with select and insert priviliges is needed. Create the user in the MySQL workbench or from the MySQL command line using the following: 

CREATE USER boardfinder@'localhost' IDENTIFIED BY 'boardfinder';

GRANT SELECT, INSERT ON boardfinder.* TO boardfinder@'localhost';

flush privileges;
If you wish you can use your own MySQL user instead of the above as long as it has the same priviliges as above user.

## Run the app
1. Start MySQL
2. Start RabbitMQ. It might already be started automatically, otherwise start it using the RabbitMQ Service – start program that should be bundled in the RabbitMQ installation, or from the command line with 'net start rabbitmq'. Starting RabbitMQ might take a little while so wait for it to start.
3. Run the five Spring Boot applications. Run the Service Registry first to save some time as the other applications will to try to register to it when they start. Then start the API-Gateway and after that the three remaining projects.
4. Start the Angular Client from it's root folder in an IDE as Visual Studio Code or from the command line with the command 'ng serve'.
5. Browse to https://localhost:4200/ to use the app!
