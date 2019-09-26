const express = require('express');
require('../database/MysqlConnection');
const router = express.Router();

router.get('/addSoundSession', function (req, res) {

	var childId = req.body.childId;
	var startTime = req.body.startTime;
	var endTime = req.body.endTime;

	console.log("api called with params childId: " + childId + ", startTime: " + startTime + ", endTime: " + endTime)
	
	let mysqlQuery = `insert into sound_session (child_id, start_time, end_time) values ( ${childId}, '${startTime}', '${endTime}')`;
	console.log("mysql query: " + mysqlQuery)

	mysqlConnection.query(mysqlQuery, function (er, result) {
		if (!er) {
			res.status(200).send("");
		} else {
			res.status(500).send("");
		}
	});

});

module.exports = router;
