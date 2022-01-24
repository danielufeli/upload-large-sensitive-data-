# File Uploaded
___

# File Uploaded
An application that allows uses to upload files in a secure way

___

# Technologies

The Appication was developed with JavaScript (ES6), Node.js using [Express 4](http://expressjs.com/).

___

## API Information
API endpoints URL - https://fileuploaderdan.herokuapp.com/

|METHOD  |DESCRIPTION                             |ENDPOINT                                  |
|------- |----------------------------------------|------------------------------------------|
|POST    |Sign Up                                 |api/v1/auth/signup                        |
|POST    |Sign In                                 |api/v1/auth/signin                        |
|POST    |Upload Files                            |api/v1/upload/newa                        |
|GET     |Get Files                               |api/v1/upload/all                         |
|DELETE  |Delete Files                            |api/v1/upload/:id                         |

___
## Live URL
URL - https://fileuploaderdan.herokuapp.com/

### Sample Users
Admin-<br/>
Username: danielufeli@gmail.com<br/>
Password: 123456

User-<br/>
Username: user1@domain.com<br/>
Password: 123456

___

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) 14.0.0 installed and [POSTMAN](https://www.getpostman.com/downloads/).

```sh
git clone git@github.com:danielufeli/upload-large-sensitive-data-.git
cd upload-large-sensitive-data-
npm install
npm start
```

File Uploaded app should now be running on [localhost:3000](http://localhost:3000/).
___

## Author
### Daniel Ufeli
