const auth = require("../middleware/auth");
const {getServicesByClientId, getServices, createNewService} = require("../controller/service");
const router = require("express").Router();

router.get("/client", getServicesByClientId);
router.post("/create", createNewService);
router.get("/", auth, getServices);

module.exports = router;