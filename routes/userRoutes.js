const express = require('express')
const userController = require('../controller/userController')
const appConfig = require("./../config/appConfig")
const auth = require('./../middleware/auth')


module.exports.setRouter = (app) => {

        let baseUrl = appConfig.apiVersion + '/users';


        app.get(baseUrl + '/view/all', auth.isAuthorized, userController.getAllUser);

        /**
         * @api {get} /api/v1/users/view/all Get all users
         * @apiVersion 0.0.1
         * @apiGroup User
         * 
         *
         * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         *  @apiSuccessExample {json} Success-Response:
             *  {
                "error": false,
                "message": "All Users Details Found",
                "status": 200,
                "data": {
                            "userId": "zYcw2Bhqm"
                            "firstName": "Johnny",
                            "lastName": "Goblin",
                            "email": "someone@somedomain.com",
                            "gender": "male",
                            "created": "date",
                            "place": "shillong"
                }
    }
    	
              @apiErrorExample {json} Error-Response:
             *
             * {
                "error": true,
                "message": "Failed To Find Users Details",
                "status": 500,
                "data": null
               }
             */

        // params: userId.
        app.get(baseUrl + '/view/:email/singleUser', auth.isAuthorized, userController.getSingleUser);

        /**
            * @api {get} /api/v1/users/view/:email/singleUser Get a single user
            * @apiVersion 0.0.1
            * @apiGroup User
            *
            * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
            * @apiParam {String} email The email should be passed as the URL parameter
            *
        * @apiSuccess {object} myResponse shows error status, message, http status code, result.
        * 
            *  @apiSuccessExample {json} Success-Response:
            *  {
               "error": false,
               "message": "User Found Successfully.",
               "status": 200,
               "data": [
                   {
                           "userId": "zYcw2Bhqm"
                           "firstName": "Johnny",
                           "lastName": "Goblin",
                           "email": "someone@somedomain.com",
                           "gender": "male",
                           "created": "date",
                            "place": "shillong"
                   }
           ]
       *   }
   	
             @apiErrorExample {json} Error-Response:
            *
            * {
               "error": true,
               "message": "Error Occured.",
               "status": 500,
               "data": null
              }
            */


        // params: firstName, lastName, email, gender, password.
        app.post(baseUrl + '/signup', userController.createUser);

        /**
             * @api {post} /api/v1/users/signup Create user
             * @apiVersion 0.0.1
             * @apiGroup User
             *
             * @apiParam {String} firstName firstName of the user passed as a body parameter
             * @apiParam {String} lastName lastName of the user passed as a body parameter
             * @apiParam {String} email email of the user passed as a body parameter
             * @apiParam {String} gender gender of the user passed as a body parameter
             * @apiParam {String} password password of the user passed as a body parameter
             * @apiParam {String} place place of the user passed as a body parameter
         * 
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
             *  @apiSuccessExample {json} Success-Response:
         *  {
                "error": false,
                "message": "User Created Successfully",
                "status": 200,
                "data": [
                            {
                                    "userId": "zYcw2Bhqm"
                                    "firstName": "Johnny",
                                    "lastName": "Goblin",
                                    "email": "someone@somedomain.com",
                                    "gender": "male",
                                    "created": "date",
                                    "place" : "shillong"
                            }
                ]
    }
            
              @apiErrorExample {json} Error-Response:
             *
             * {
                "error": true,
                "message": "Error Occured.",
                "status": 500,
                "data": null
               }
             */

        // params: email, password.
        app.post(baseUrl + '/login', userController.loginFunction);

        /**
         * @apiGroup User
         * @apiVersion  1.0.0
         * @api {post} /api/v1/users/login api for user login.
         *
         * @apiParam {string} email email of the user. (body params) (required)
         * @apiParam {string} password password of the user. (body params) (required)
         *
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
         *  {
                "error": false,
                "message": "User login Successfully",
                "status": 200,
                "data": [
                        {
                                "userId": "zYcw2Bhqm"
                                "firstName": "Johnny",
                                "lastName": "Goblin",
                                "email": "someone@somedomain.com",
                                "gender": "male",
                                "created": "date",
                                "place" : "shillong"
                        }
                ]
    }
    
            @apiErrorExample {json} Error-Response:
             *
             * {
                "error": true,
                "message": "Error Occured.",
                "status": 500,
                "data": null
               }
             */



        app.put(baseUrl + '/:userId/edit', auth.isAuthorized, userController.editUser);

        /**
	 * @api {put} /api/v1/users/:userId/edit Edit user by userId
	 * @apiVersion 0.0.1
	 * @apiGroup User
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} userId userId of the user passed as the URL parameter
        * 
        * @apiSuccess {object} myResponse shows error status, message, http status code, result.
        *
                *  @apiSuccessExample {json} Success-Response:
        *  {
            "error": false,
            "message": "User Edited Successfully",
            "status": 200,
            "data": [
                    {
                            "userId": "zYcw2Bhqm"
                            "firstName": "Johnny",
                            "lastName": "Goblin",
                            "email": "someone@somedomain.com",
                            "gender": "male",
                            "created": "date",
                            "place" : "shillong"
                    }
            ]
}
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

        app.post(baseUrl + '/:userId/delete', auth.isAuthorized, userController.deleteUser);

        /**
             * @api {post} /api/v1/users/:userId/delete Delete user by userId
             * @apiVersion 0.0.1
             * @apiGroup User
             *
             * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
             * @apiParam {String} userId userId of the user passed as the URL parameter
         * 
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
             *
             *  @apiSuccessExample {json} Success-Response:
             *  {
                "error": false,
                "message": "User Deleted Successfully",
                "status": 200,
                "data": []
        }
        
              @apiErrorExample {json} Error-Response:
             *
             * {
                "error": true,
                "message": "Error Occured.",
                "status": 500,
                "data": null
               }
             */

        app.post(baseUrl + '/forgotpassword/email', userController.validateemail);

        /**
             * @api {post} /api/v1/users/forgotpassword/email validate email
             * @apiVersion 0.0.1
             * @apiGroup User
             *
             * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} email email of the user passed as the body parameter
         * 
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
             *
             *  @apiSuccessExample {json} Success-Response:
             *  {
                "error": false,
                "message": "User email found Successfully",
                "status": 200,
                "data": []
        }
        
              @apiErrorExample {json} Error-Response:
             *
             * {
                "error": true,
                "message": "Error Occured.",
                "status": 500,
                "data": null
               }
             */

        app.post(baseUrl + '/forgotpassword/reset', userController.resetPassword);

        /**
             * @api {post} /api/v1/users/forgotpassword/reset reset password of user
             * @apiVersion 0.0.1
             * @apiGroup User
             *
             * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
     * @apiParam {String} email email of the user passed as the body parameter
     * @apiParam {String} password password of the user passed as the body parameter
         * 
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
             *
             *  @apiSuccessExample {json} Success-Response:
             *  {
                "error": false,
                "message": "Password Reset Successfully",
                "status": 200,
                "data": []
        }
        
              @apiErrorExample {json} Error-Response:
             *
             * {
                "error": true,
                "message": "Error Occured.",
                "status": 500,
                "data": null
               }
             */

        app.post(baseUrl + '/logout', auth.isAuthorized, userController.logout);

        /**
         * @apiGroup User
         * @apiVersion  1.0.0
         * @api {post} /api/v1/users/logout api for user logout.
         *
             * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
         *
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
             {
                "error": false,
                "message": "Logout Successful",
                "status": 200,
                "data": []
    
            }
        */

}


