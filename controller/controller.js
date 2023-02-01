const { StatusCodes } = require("http-status-codes");
const DBconnection = require("../database/connection");

const Controller = {
  read: async (req, res) => {
    try {
      let getAllData = `Select id, name, account_id, email, address,language, last_login from user`;
      let result = await DBconnection(getAllData);
      // console.log(result);
      let length = result.length;
      res.status(StatusCodes.OK).json({ result, length });
    } catch (err) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: err.message });
    }
  },
};

module.exports = Controller;
