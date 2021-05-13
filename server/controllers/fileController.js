require('dotenv').config();
const fileService = require('../services/fileService');
const fs = require('fs');
const path = require('path');
const {User, File} = require('../models/models');

class FileController {
    async createDir(req, res) {
        try {
            const {name} = req.body;
            const file = await File.create({name, userId: req.user.id});

            file.path = name;
            await fileService.createDir(file);

            return res.json(file);
        } catch (e) {
            console.log(e);
            return res.status(404).json(e);
        }
    }

    async getFiles(req, res) {
        try {
            const files = await File.findAll({ where: {userId: req.user.id}});
            return res.json(files);
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'Can not get files'})
        }
    }

    async uploadFile(req, res) {
        try {
            const file = req.files.file;


            const filePath = path.join(__dirname, `../files/${req.user.id}/${file.name}`);

            if (fs.existsSync(filePath)) {
                return res.status(400).json({message: 'File already exist'});
            }
            file.mv(filePath);



            const dbFile = await File.create({
                path: filePath,
                name: file.name,
                userId: req.user.id,
                content: file.data
            });

            res.json(dbFile);
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'Upload error'});
        }
    }
}

module.exports = new FileController();
