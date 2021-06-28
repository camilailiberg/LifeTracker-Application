const express = require("express");
const router = express.Router();

// create a sleep data
router.post("/sleep/create", async (req, res, next) => {
	try {
		// const sleepData = await User.login(req.body);
		// return res.status(200).json({ user });
	} catch (err) {
		next(err);
	}
});

// get all sleep data
router.get("/sleep", async (req, res, next) => {
	try {
	} catch (err) {
		next(err);
	}
});

// geta all sleep data for a single user.
router.get("/sleep/:user_id", async (req, res, next) => {
	try {
	} catch (err) {
		next(err);
	}
});

//get single sleep data
router.get("/sleep/:id", async (req, res, next) => {
	try {
	} catch (err) {
		next(err);
	}
});

// get a single sleep data for a specific user
router.get("/:user_id/:id", async (req, res, next) => {
	try {
	} catch (err) {
		next(err);
	}
});

// get average sleep for a single user
router.get("/average", async (req, res, next) => {
	try {
	} catch (err) {
		next(err);
	}
});

// get total sleep for a single user
router.get("/total", async (req, res, next) => {
	try {
	} catch (err) {
		next(err);
	}
});

// update sleep data
router.put("/update", async (req, res, next) => {
	try {
	} catch (err) {
		next(err);
	}
});

// delete sleep data
router.delete("/delete", async (req, res, next) => {
	try {
	} catch (err) {
		next(err);
	}
});

module.exports = router;
