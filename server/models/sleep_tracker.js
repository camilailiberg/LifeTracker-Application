const db = require("../db");

class Sleep {
	//lists all sleep data
	static async listSleepData() {}

	//list all sleep data for a single user in decending order by when they were created.
	static async listSleepDataSingleUser(user_id) {}

	//updates a sleep datat for a user
	static async updateSleepData(id) {}

	//deletes a sleep data for a user
	static async deleteSleepData(id) {}
}
module.exports = Sleep;
