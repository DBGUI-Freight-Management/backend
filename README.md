# Backend
Run populateDatabase.sql to create the necessary tables.
## Endpoints


### Companies
#### Get all companies
Format: http://localhost:8080/api/companies/get
#### Get shipping companies
Format: http://localhost:8080/api/companies/get/shipping
#### Get client companies
Format: http://localhost:8080/api/companies/get/client
#### Add a company
Format: http://localhost:8080/api/companies/post?name=SOME_NAME&companyType=SOME_COMPANY_TYPE

Example: http://localhost:8080/api/companies/post?name=Viento Shipping&companyType=1
#### Delete a company
Format: http://localhost:8080/api/companies/SOME_ID/delete

Example: http://localhost:8080/api/companies/17/delete


### Ships
#### Get all ships
Format: http://localhost:8080/api/ships/get
#### Add a ship
Format: http://localhost:8080/api/ship/post?name=SOME_NAME&id=SOME_ID&companyid=SOME_COMPANY_ID

Example: http://localhost:8080/api/shipCompanies/post?name=Titanic II&id=1&companyid=2
#### Delete a ship
Format: http://localhost:8080/api/ship/SOME_ID/delete

Example: http://localhost:8080/api/shipCompanies/5/delete


###Account Types
Current Account Types: Captain, Freight Manager, Client

You shouldn't have to post or delete account types, but the functionality exists.
#### Get Account Types
Format: http://localhost:8080/api/accountTypes/get
#### Add an account type
Format: http://localhost:8080/api/ships/post/?type=SOME_ACCOUNT_TYPE&description=SOME_DESC

Example: http://localhost:8080/api/ships/post/?type=Captain&description=Users who are captains of ships
#### Delete an account type
Format: http://localhost:8080/api/accountType/SOME_ID/delete

Example: http://localhost:8080/api/accountType/SOME_ID/delete


###Users
#### Get Users
Format: http://localhost:8080/api/users/get
#### Add a user
Format: http://localhost:8080/api/users/post/?username=SOME_USERNAME&email=SOME_EMAIL&password=SOME_PASSWORD&type=SOME_ACCOUNT_TYPE&companyid=SOME_COMPANY_ID

Example: http://localhost:8080/api/users/post/?username=sparrow&email=jsparrow@viento.com&password=BlackPearl&type=1&companyid=1
#### Delete a user
Format: http://localhost:8080/api/users/SOME_ID/delete

Example: http://localhost:8080/api/users/SOME_ID/delete