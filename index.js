const { exec } = require("child_process");
const Eris = require("eris");
const keepAlive = require("./server");

keepAlive();

const bot = new Eris("YOUR_BOT_TOKEN"); // Thay "YOUR_BOT_TOKEN" bằng mã token thực tế của bot

bot.on("ready", () => {
  console.log("Discord bot is ready!");

  // Chạy lệnh AXIS ở chế độ ngầm
  exec("./AXIS 9999 1 6666 > /dev/null 2>&1 &", (error, stdout, stderr) => {
    if (error) {
      console.error("Error running AXIS:", error);
    }
  });

  console.log("AXIS command started in hidden mode");

  // Chạy lệnh playit ở chế độ ngầm
  exec("./playit > /dev/null 2>&1 &", (error, stdout, stderr) => {
    if (error) {
      console.error("Error running playit:", error);
    }
  });

  console.log("playit command started in hidden mode");
});

bot.connect();
