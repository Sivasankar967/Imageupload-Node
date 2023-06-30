const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const imageController = require('../controllers/imageController');

router.get('/', imageController.renderUploadForm);
router.post('/upload', upload.single('image'), imageController.UploadImage);

module.exports = router;
