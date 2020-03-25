# Backend
Run populateDatabase.sql to create the necessary tables.
## Endpoints
### Shipping Companies
#### Get all shipping companies
Format: http://localhost:8080/api/shipCompanies/get
#### Add a shipping company
Format: http://localhost:8080/api/shipCompanies/post?name=SOME_NAME&id=SOME_ID
Example: http://localhost:8080/api/shipCompanies/post?name='VientoShipping'&id=1
#### Delete a shipping company
Format: http://localhost:8080/api/shipCompanies/SOME_ID/delete
Example: http://localhost:8080/api/shipCompanies/17/delete
### Ships
#### Get all ships
Format: http://localhost:8080/api/ships/get
#### Add a ship
Format: http://localhost:8080/api/ship/post?name=SOME_NAME&id=SOME_ID&companyid=SOME_COMPANY_ID
Example: http://localhost:8080/api/shipCompanies/post?name='Titanic II'&id=1&companyid=2
#### Delete a ship
Format: http://localhost:8080/api/ship/SOME_ID/delete
Example: http://localhost:8080/api/shipCompanies/5/delete
