const express = require('express')
const commentController = require('../controller/commentController')
const appConfig = require("../config/appConfig")
const auth = require('../middleware/auth')


module.exports.setRouter = function(app){

    let baseUrl = appConfig.apiVersion+'/comment';
	
	
    app.get(baseUrl+'/view/all/:trackingId', auth.isAuthorized, commentController.getAllComments);

        /**
	 * @api {get} /api/v1/comment//view/all/:trackingId get all comment
	 * @apiVersion 0.0.1
	 * @apiGroup comment
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} trackingId trackingId of the issue passed as the url parameter
     * 
	 *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Comment Found Successfully",
	    "status": 200,
	    "data": [{
				commentId: "Number",
				issueId: "string",
				email: "string",
				comment: boolean,
				created: "string"
			}]
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

    app.post(baseUrl+'/add', auth.isAuthorized, commentController.addComment);
    /**
	 * @api {post} /api/v1/comment/add adding comment
	 * @apiVersion 0.0.1
	 * @apiGroup comment
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} trackingId trackingId of the issue passed as the body parameter
	 * @apiParam {String} email email of the issue passed as the body parameter
     * 
	 *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Comment Added Successfully",
	    "status": 200,
	    "data": [{
				commentId: "Number",
				issueId: "string",
				email: "string",
				comment: boolean,
				created: "string"
			}]
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

}