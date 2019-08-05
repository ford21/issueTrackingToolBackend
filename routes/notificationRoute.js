const express = require('express')
const notificationController = require('../controller/notificationController')
const appConfig = require("./../config/appConfig")
const auth = require('./../middleware/auth')


module.exports.setRouter = function (app) {
    let baseUrl = appConfig.apiVersion + '/notifications';


    app.get(baseUrl + '/get/all', auth.isAuthorized, notificationController.getAllNotification);

	/**
	 * @api {get} /api/v1/notifications/get/all Get all notifications
	 * @apiVersion 0.0.1
	 * @apiGroup notification
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} email email of the issue passed as the body parameter
	 *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Issue Details Found",
	    "status": 200,
	    "data": [
			{
				notificationId: "string",
				issueId: "string",
				email: "string",
				notifyChange: boolean,
				byWhom: "string",
				title: "string"
			}
	    ]
}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Notifications Details",
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(baseUrl+'/add', auth.isAuthorized, notificationController.addNotification);
    /**
	 * @api {post} /api/v1/notifications/add Create Notifications
	 * @apiVersion 0.0.1
	 * @apiGroup notification
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} title title of the issue passed as a body parameter
	 * @apiParam {String} trackingId trackingId of the issue passed as a body parameter
	 * @apiParam {String} changes changes of the issue passed as a body parameter
	 *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Issue Created Successfully.",
	    "status": 200,
	    "data": [
			{
				notificationId: "string",
				issueId: "string",
				email: "string",
				notifyChange: boolean,
				byWhom: "string",
				title: "string"
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

    app.post(baseUrl+'/delete', auth.isAuthorized, notificationController.deleteNotification);

    /**
	 * @api {post} /api/v1/notifications/delete Delete Notifications
	 * @apiVersion 0.0.1
	 * @apiGroup notification
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
	    "message": "Issue Deleted Successfully",
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

}