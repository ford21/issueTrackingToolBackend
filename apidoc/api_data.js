define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/issueTrackingTool/view/all",
    "title": "Get all issue",
    "version": "0.0.1",
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Issue Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t{\n\t\t\t\ttrackingId: \"string\",\n\t\t\t\ttitle: \"string\",\n\t\t\t\tdescription: \"string\",\n\t\t\t\tcreator: \"string\",\n\t\t\t\tstatus: \"string\",\n\t\t\t\temail: \"string\",\n\t\t\t\tcreated: \"date\",\n\t\t\t\tlastModified: \"date\"\n\t\t\t}\n\t    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Issue Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issueRoutes.js",
    "groupTitle": "Issue",
    "name": "GetApiV1IssuetrackingtoolViewAll"
  },
  {
    "type": "get",
    "url": "/api/v1/issueTrackingTool/view/by/creator/:creator",
    "title": "Get issues by creator",
    "version": "0.0.1",
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "creator",
            "description": "<p>creator of the issue passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Issues Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t{\n\t\t\t\ttrackingId: \"string\",\n\t\t\t\ttitle: \"string\",\n\t\t\t\tdescription: \"string\",\n\t\t\t\tcreator: \"string\",\n\t\t\t\tstatus: \"string\",\n\t\t\t\temail: \"string\",\n\t\t\t\tcreated: \"date\",\n\t\t\t\tlastModified: \"date\"\n\t\t\t}\n\t    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issueRoutes.js",
    "groupTitle": "Issue",
    "name": "GetApiV1IssuetrackingtoolViewByCreatorCreator"
  },
  {
    "type": "get",
    "url": "/api/v1/issueTrackingTool/view/:trackingId/singleIssue",
    "title": "Get a single issue",
    "version": "0.0.1",
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trackingId",
            "description": "<p>The trackingId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Issue Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t\t\ttrackingId: \"string\",\n\t\t\t\ttitle: \"string\",\n\t\t\t\tdescription: \"string\",\n\t\t\t\tcreator: \"string\",\n\t\t\t\tstatus: \"string\",\n\t\t\t\temail: \"string\",\n\t\t\t\tcreated: \"date\",\n\t\t\t\tlastModified: \"date\"\n\t\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issueRoutes.js",
    "groupTitle": "Issue",
    "name": "GetApiV1IssuetrackingtoolViewTrackingidSingleissue"
  },
  {
    "type": "post",
    "url": "/api/v1/issueTrackingTool/create",
    "title": "Create issue",
    "version": "0.0.1",
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the issue passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the issue passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bigDescription",
            "description": "<p>bigDescription of the issue passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the issue passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Issue Created Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t{\n\t\t\t\ttrackingId: \"string\",\n\t\t\t\ttitle: \"string\",\n\t\t\t\tdescription: \"string\",\n\t\t\t\tcreator: \"string\",\n\t\t\t\tstatus: \"string\",\n\t\t\t\temail: \"string\",\n\t\t\t\tcreated: \"date\",\n\t\t\t\tlastModified: \"date\"\n\t\t\t}\n\t    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issueRoutes.js",
    "groupTitle": "Issue",
    "name": "PostApiV1IssuetrackingtoolCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/issueTrackingTool/:trackingId/delete",
    "title": "Delete issue by trackingId",
    "version": "0.0.1",
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trackingId",
            "description": "<p>trackingId of the issue passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Issue Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issueRoutes.js",
    "groupTitle": "Issue",
    "name": "PostApiV1IssuetrackingtoolTrackingidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/issueTrackingTool/:trackingId/edit",
    "title": "Edit issue by trackingId",
    "version": "0.0.1",
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trackingId",
            "description": "<p>trackingId of the issue passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Issue Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t{\n\t\t\t\ttrackingId: \"string\",\n\t\t\t\ttitle: \"string\",\n\t\t\t\tdescription: \"string\",\n\t\t\t\tcreator: \"string\",\n\t\t\t\tstatus: \"string\",\n\t\t\t\temail: \"string\",\n\t\t\t\tcreated: \"date\",\n\t\t\t\tlastModified: \"date\"\n\t\t\t}\n\t    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issueRoutes.js",
    "groupTitle": "Issue",
    "name": "PutApiV1IssuetrackingtoolTrackingidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "Get all users",
    "version": "0.0.1",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n               \"error\": false,\n               \"message\": \"All Users Details Found\",\n               \"status\": 200,\n               \"data\": {\n                           \"userId\": \"zYcw2Bhqm\"\n                           \"firstName\": \"Johnny\",\n                           \"lastName\": \"Goblin\",\n                           \"email\": \"someone@somedomain.com\",\n                           \"gender\": \"male\",\n                           \"created\": \"date\",\n                           \"place\": \"shillong\"\n               }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n                \"error\": true,\n                \"message\": \"Failed To Find Users Details\",\n                \"status\": 500,\n                \"data\": null\n               }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "User",
    "name": "GetApiV1UsersViewAll"
  },
  {
    "type": "get",
    "url": "/api/v1/users/view/:email/singleUser",
    "title": "Get a single user",
    "version": "0.0.1",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n              \"error\": false,\n              \"message\": \"User Found Successfully.\",\n              \"status\": 200,\n              \"data\": [\n                  {\n                          \"userId\": \"zYcw2Bhqm\"\n                          \"firstName\": \"Johnny\",\n                          \"lastName\": \"Goblin\",\n                          \"email\": \"someone@somedomain.com\",\n                          \"gender\": \"male\",\n                          \"created\": \"date\",\n                           \"place\": \"shillong\"\n                  }\n          ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n               \"error\": true,\n               \"message\": \"Error Occured.\",\n               \"status\": 500,\n               \"data\": null\n              }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "User",
    "name": "GetApiV1UsersViewEmailSingleuser"
  },
  {
    "type": "post",
    "url": "/api/v1/users/forgotpassword/email",
    "title": "validate email",
    "version": "0.0.1",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user passed as the body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n               \"error\": false,\n               \"message\": \"User email found Successfully\",\n               \"status\": 200,\n               \"data\": []\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n                \"error\": true,\n                \"message\": \"Error Occured.\",\n                \"status\": 500,\n                \"data\": null\n               }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersForgotpasswordEmail"
  },
  {
    "type": "post",
    "url": "/api/v1/users/forgotpassword/reset",
    "title": "reset password of user",
    "version": "0.0.1",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user passed as the body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n               \"error\": false,\n               \"message\": \"Password Reset Successfully\",\n               \"status\": 200,\n               \"data\": []\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n                \"error\": true,\n                \"message\": \"Error Occured.\",\n                \"status\": 500,\n                \"data\": null\n               }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersForgotpasswordReset"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n               \"error\": false,\n               \"message\": \"User login Successfully\",\n               \"status\": 200,\n               \"data\": [\n                       {\n                               \"userId\": \"zYcw2Bhqm\"\n                               \"firstName\": \"Johnny\",\n                               \"lastName\": \"Goblin\",\n                               \"email\": \"someone@somedomain.com\",\n                               \"gender\": \"male\",\n                               \"created\": \"date\",\n                               \"place\" : \"shillong\"\n                       }\n               ]\n   }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n                \"error\": true,\n                \"message\": \"Error Occured.\",\n                \"status\": 500,\n                \"data\": null\n               }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "User",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "api for user logout.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Logout Successful\",\n    \"status\": 200,\n    \"data\": []\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersLogout"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "Create user",
    "version": "0.0.1",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "place",
            "description": "<p>place of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n               \"error\": false,\n               \"message\": \"User Created Successfully\",\n               \"status\": 200,\n               \"data\": [\n                           {\n                                   \"userId\": \"zYcw2Bhqm\"\n                                   \"firstName\": \"Johnny\",\n                                   \"lastName\": \"Goblin\",\n                                   \"email\": \"someone@somedomain.com\",\n                                   \"gender\": \"male\",\n                                   \"created\": \"date\",\n                                   \"place\" : \"shillong\"\n                           }\n               ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n                \"error\": true,\n                \"message\": \"Error Occured.\",\n                \"status\": 500,\n                \"data\": null\n               }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersSignup"
  },
  {
    "type": "post",
    "url": "/api/v1/users/:userId/delete",
    "title": "Delete user by userId",
    "version": "0.0.1",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n               \"error\": false,\n               \"message\": \"User Deleted Successfully\",\n               \"status\": 200,\n               \"data\": []\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n                \"error\": true,\n                \"message\": \"Error Occured.\",\n                \"status\": 500,\n                \"data\": null\n               }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersUseridDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/users/:userId/edit",
    "title": "Edit user by userId",
    "version": "0.0.1",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n            \"error\": false,\n            \"message\": \"User Edited Successfully\",\n            \"status\": 200,\n            \"data\": [\n                    {\n                            \"userId\": \"zYcw2Bhqm\"\n                            \"firstName\": \"Johnny\",\n                            \"lastName\": \"Goblin\",\n                            \"email\": \"someone@somedomain.com\",\n                            \"gender\": \"male\",\n                            \"created\": \"date\",\n                            \"place\" : \"shillong\"\n                    }\n            ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/userRoutes.js",
    "groupTitle": "User",
    "name": "PutApiV1UsersUseridEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/comment//view/all/:trackingId",
    "title": "get all comment",
    "version": "0.0.1",
    "group": "comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trackingId",
            "description": "<p>trackingId of the issue passed as the url parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Comment Found Successfully\",\n\t    \"status\": 200,\n\t    \"data\": [{\n\t\t\t\tcommentId: \"Number\",\n\t\t\t\tissueId: \"string\",\n\t\t\t\temail: \"string\",\n\t\t\t\tcomment: boolean,\n\t\t\t\tcreated: \"string\"\n\t\t\t}]\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/commentRoute.js",
    "groupTitle": "comment",
    "name": "GetApiV1CommentViewAllTrackingid"
  },
  {
    "type": "post",
    "url": "/api/v1/comment/add",
    "title": "adding comment",
    "version": "0.0.1",
    "group": "comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trackingId",
            "description": "<p>trackingId of the issue passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the issue passed as the body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Comment Added Successfully\",\n\t    \"status\": 200,\n\t    \"data\": [{\n\t\t\t\tcommentId: \"Number\",\n\t\t\t\tissueId: \"string\",\n\t\t\t\temail: \"string\",\n\t\t\t\tcomment: boolean,\n\t\t\t\tcreated: \"string\"\n\t\t\t}]\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/commentRoute.js",
    "groupTitle": "comment",
    "name": "PostApiV1CommentAdd"
  },
  {
    "type": "get",
    "url": "/api/v1/notifications/get/all",
    "title": "Get all notifications",
    "version": "0.0.1",
    "group": "notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the issue passed as the body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Issue Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t{\n\t\t\t\tnotificationId: \"string\",\n\t\t\t\tissueId: \"string\",\n\t\t\t\temail: \"string\",\n\t\t\t\tnotifyChange: boolean,\n\t\t\t\tbyWhom: \"string\",\n\t\t\t\ttitle: \"string\"\n\t\t\t}\n\t    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Notifications Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/notificationRoute.js",
    "groupTitle": "notification",
    "name": "GetApiV1NotificationsGetAll"
  },
  {
    "type": "post",
    "url": "/api/v1/notifications/add",
    "title": "Create Notifications",
    "version": "0.0.1",
    "group": "notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the issue passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trackingId",
            "description": "<p>trackingId of the issue passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "changes",
            "description": "<p>changes of the issue passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Issue Created Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t{\n\t\t\t\tnotificationId: \"string\",\n\t\t\t\tissueId: \"string\",\n\t\t\t\temail: \"string\",\n\t\t\t\tnotifyChange: boolean,\n\t\t\t\tbyWhom: \"string\",\n\t\t\t\ttitle: \"string\"\n\t\t\t}\n\t    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/notificationRoute.js",
    "groupTitle": "notification",
    "name": "PostApiV1NotificationsAdd"
  },
  {
    "type": "post",
    "url": "/api/v1/notifications/delete",
    "title": "Delete Notifications",
    "version": "0.0.1",
    "group": "notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trackingId",
            "description": "<p>trackingId of the issue passed as the body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the issue passed as the body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Issue Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/notificationRoute.js",
    "groupTitle": "notification",
    "name": "PostApiV1NotificationsDelete"
  },
  {
    "type": "get",
    "url": "/api/v1/watcher/view/all/:trackingId",
    "title": "Get all Watchers",
    "version": "0.0.1",
    "group": "watcher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All watcher Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t{\n\t\t\t\ttrackingId: \"string\",\n\t\t\t\twatcherId: \"string\",\n\t\t\t\tname: \"string\",\n\t\t\t\temail: \"string\"\n\t\t\t}\n\t    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Watchers\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/watcherRoutes.js",
    "groupTitle": "watcher",
    "name": "GetApiV1WatcherViewAllTrackingid"
  },
  {
    "type": "post",
    "url": "/api/v1/watcher/:trackingId/add",
    "title": "Add watcher",
    "version": "0.0.1",
    "group": "watcher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trackingId",
            "description": "<p>trackingId of the issue passed as a Url parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Watcher Added Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t{\n\t\t\t\ttrackingId: \"string\",\n\t\t\t\twatcherId: \"string\",\n\t\t\t\tname: \"string\",\n\t\t\t\temail: \"string\"\n\t\t\t}\n\t    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/watcherRoutes.js",
    "groupTitle": "watcher",
    "name": "PostApiV1WatcherTrackingidAdd"
  },
  {
    "type": "post",
    "url": "/api/v1/watcher/:trackingId/remove",
    "title": "remove watcher",
    "version": "0.0.1",
    "group": "watcher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trackingId",
            "description": "<p>issue id of the user passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n            \"error\": false,\n            \"message\": \"Remove Successfully\",\n            \"status\": 200,\n            \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/watcherRoutes.js",
    "groupTitle": "watcher",
    "name": "PostApiV1WatcherTrackingidRemove"
  }
] });
