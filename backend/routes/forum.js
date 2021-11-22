const express = require("express");
const router = express.Router();
const multer = require("multer");
const Forum = require ('../models/forum')
const onPublicar = require('../src/app/forum')

