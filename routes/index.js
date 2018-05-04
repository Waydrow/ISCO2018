/**
 * This file is the route control of homepage.
 *
 * @name      index.js
 * @summary   Route control of homepage
 * @link      /route/index.js
 * @since     2018-02-03
 * @author    Zuowu Zheng <wozhengzw@gmail.com>
 */
    
// 3rd party modules
var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "homepage",
        "active": -1
    });
});

/*router.get("/proceeding.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "proceeding",
        "active": 0
    });
});

router.get("/program.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "program",
        "active": 0
    });
});

router.get("/accepted.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "accepted",
        "active": 0
    });
});*/

router.get("/attendanceList.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "attendanceList",
        "active": 0
    });
});

router.get("/venue.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "venue",
        "active": 0
    });
});

/*router.get("/keynote.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "keynote",
        "active": 0
    });
});

router.get("/instructions.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "instructions",
        "active": 1
    });
});

router.get("/callforpapers.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "callforpapers",
        "active": 1
    });
});

router.get("/submission.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "submission",
        "active": 1
    });
});*/

router.get("/registration.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "registration",
        "active": 1
    });
});

/*router.get("/organizingcommittee.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "organizingcommittee",
        "active": 2
    });
});

router.get("/programcommittee.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "programcommittee",
        "active": 2
    });
});

router.get("/sponsors.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "sponsors",
        "active": 2
    });
});

router.get("/chairs.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "chairs",
        "active": 2
    });
});*/

router.get("/cochairs.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "cochairs",
        "active": 2
    })
});

router.get("/contactus.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "contactus",
        "active": 3
    });
});

/*router.get("/bestpapers.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "bestpapers",
        "active": 4
    });
});

router.get("/photos.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "photos",
        "active": 4
    });
});

router.get("/banquet.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "banquet",
        "active": 4
    });
});

router.get("/moments.html", function (req, res, next) {
    "use strict";
    return res.render("index", {
        "page": "moments",
        "active": 4
    });
});*/

module.exports = router;
