const fs = require("fs");

try {
	const data = fs.readFileSync(
		"/sys/class/thermal/thermal_zone0/temp",
		"utf8"
	);
	console.log(data);
} catch (err) {
	console.error(err);
}
