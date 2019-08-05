const express = require('express')
const watchController = require('../controller/watchController')
const appConfig = require("./../config/appConfig")
const auth = require('./../middleware/auth')


module.exports.setRouter = function(app){
    let baseUrl = appConfig.apiVersion+'/watcher';
	
	
    app.get(baseUrl+'/view/all/:trackingId', auth.isAuthorized, watchController.getWatchers);
	app.get(baseUrl+'/view/all', auth.isAuthorized, watchController.getAllWatchers);
	/**
	 * @api {get} /api/v1/watcher/view/all/:trackingId Get all Watchers
	 * @apiVersion 0.0.1
	 * @apiGroup watcher
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All watcher Details Found",
	    "status": 200,
	    "data": [
			{
				trackingId: "string",
				watcherId: "string",
				name: "string",
				email: "string"
			}
	    ]
}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Watchers",
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(baseUrl+'/:trackingId/add', auth.isAuthorized, watchController.addWatcher);

    /**
	 * @api {post} /api/v1/watcher/:trackingId/add Add watcher
	 * @apiVersion 0.0.1
	 * @apiGroup watcher
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} trackingId trackingId of the issue passed as a Url parameter
	 *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Watcher Added Successfully.",
	    "status": 200,
	    "data": [
			{
				trackingId: "string",
				watcherId: "string",
				name: "string",
				email: "string"
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
    
    app.post(baseUrl + '/:trackingId/remove', auth.isAuthorized, watchController.removeWatcher);

        /**
	 * @api {post} /api/v1/watcher/:trackingId/remove remove watcher
	 * @apiVersion 0.0.1
	 * @apiGroup watcher
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} trackingId issue id of the user passed as the URL parameter
        * 
        * @apiSuccess {object} myResponse shows error status, message, http status code, result.
        *
                *  @apiSuccessExample {json} Success-Response:
        *  {
            "error": false,
            "message": "Remove Successfully",
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