const express = require('express')
const issueController = require('../controller/issueController')
const appConfig = require("./../config/appConfig")
const auth = require('./../middleware/auth');


module.exports.setRouter = function (app) {

	let baseUrl = appConfig.apiVersion + '/issueTrackingTool';


	app.get(baseUrl + '/view/all', auth.isAuthorized, issueController.getAllIssues);

	/**
	 * @api {get} /api/v1/issueTrackingTool/view/all Get all issue
	 * @apiVersion 0.0.1
	 * @apiGroup Issue
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
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
				trackingId: "string",
				title: "string",
				description: "string",
				creator: "string",
				status: "string",
				email: "string",
				created: "date",
				lastModified: "date"
			}
	    ]
}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Issue Details",
	    "status": 500,
	    "data": null
	   }
	 */


	app.get(baseUrl + '/view/:trackingId/singleIssue', auth.isAuthorized, issueController.viewSingleIssue);

    /**
	 * @api {get} /api/v1/issueTrackingTool/view/:trackingId/singleIssue Get a single issue
	 * @apiVersion 0.0.1
	 * @apiGroup Issue
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} trackingId The trackingId should be passed as the URL parameter
	 *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Issue Found Successfully.",
	    "status": 200,
	    "data": {
			trackingId: "string",
				title: "string",
				description: "string",
				creator: "string",
				status: "string",
				email: "string",
				created: "date",
				lastModified: "date"
		}
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


	app.get(baseUrl + '/view/by/creator/:creator', auth.isAuthorized, issueController.viewIssueByCreator);

    /**
	 * @api {get} /api/v1/issueTrackingTool/view/by/creator/:creator Get issues by creator
	 * @apiVersion 0.0.1
	 * @apiGroup Issue
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} creator creator of the issue passed as the URL parameter
	 *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Issues Found Successfully.",
	    "status": 200,
	    "data": [
			{
				trackingId: "string",
				title: "string",
				description: "string",
				creator: "string",
				status: "string",
				email: "string",
				created: "date",
				lastModified: "date"
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


	app.post(baseUrl + '/:trackingId/delete', auth.isAuthorized, issueController.deleteIssue);

    /**
	 * @api {post} /api/v1/issueTrackingTool/:trackingId/delete Delete issue by trackingId
	 * @apiVersion 0.0.1
	 * @apiGroup Issue
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} trackingId trackingId of the issue passed as the URL parameter
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

	app.put(baseUrl + '/:trackingId/edit', auth.isAuthorized, issueController.editIssue);

    /**
	 * @api {put} /api/v1/issueTrackingTool/:trackingId/edit Edit issue by trackingId
	 * @apiVersion 0.0.1
	 * @apiGroup Issue
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} trackingId trackingId of the issue passed as the URL parameter
	 *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Issue Edited Successfully.",
	    "status": 200,
	    "data": [
			{
				trackingId: "string",
				title: "string",
				description: "string",
				creator: "string",
				status: "string",
				email: "string",
				created: "date",
				lastModified: "date"
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

	//for sorting
	app.get(baseUrl + '/sort', auth.isAuthorized, issueController.sorting);
	app.get(baseUrl + '/search', auth.isAuthorized, issueController.searchIssues);
	app.post(baseUrl + '/assign', auth.isAuthorized, issueController.assignedIssue);
	app.post(baseUrl + '/create', auth.isAuthorized, issueController.createIssue);

    /**
	 * @api {post} /api/v1/issueTrackingTool/create Create issue
	 * @apiVersion 0.0.1
	 * @apiGroup Issue
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} title title of the issue passed as a body parameter
	 * @apiParam {String} description description of the issue passed as a body parameter
	 * @apiParam {String} bigDescription bigDescription of the issue passed as a body parameter
	 * @apiParam {String} status status of the issue passed as a body parameter
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
				trackingId: "string",
				title: "string",
				description: "string",
				creator: "string",
				status: "string",
				email: "string",
				created: "date",
				lastModified: "date"
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


}


