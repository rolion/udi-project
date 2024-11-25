const express = require('express');
const multer = require('multer');
const axios = require('axios');
const cors = require('cors');
const fs = require('fs');
const FormData = require('form-data');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
const { dirname } = require('path');
const appDir = dirname(require.main.filename);

require('dotenv').config()

const app = express();
const upload = multer({ dest: appDir+'/uploads/' });
const PORT = 3000;

const AZURE_API_KEY = process.env.AZURE_API_KEY ;
const AZURE_ENDPOINT = process.env.AZURE_ENDPOINT;

app.use(cors());
app.use(express.json());

const convertToWav = (inputPath, outputPath) => {
    return new Promise((resolve, reject) => {
        ffmpeg(inputPath)
            .toFormat('wav')
            .on('end', () => resolve(outputPath))
            .on('error', reject)
            .save(outputPath);
    });
};

// Endpoint para subir y transcribir audio
app.post('/transcribe', upload.single('audio'), async (req, res) => {
    try {

        const convertedFilePath = `uploads/${Date.now()}_converted.wav`;
        await convertToWav(req.file.path, convertedFilePath);
        const audioPath = req.file.path;
        // const audioBuffer = fs.createReadStream(audioPath);
        console.log("audioPath ", convertedFilePath )
        const formData = new FormData();
        formData.append('file',  fs.createReadStream(convertedFilePath), {
            contentType: 'audio/wav',
            filename: req.file.originalname,
        });
        formData.append('model', 'whisper-1')
        const response = await axios.post(
            AZURE_ENDPOINT,
            formData,
            {
                headers: {
                    'api-key': AZURE_API_KEY,
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        // Eliminar archivo temporal después de procesarlo
        fs.unlinkSync(audioPath);
        fs.unlinkSync(convertedFilePath);
        res.json(response.data);
    } catch (error) {
        console.log(error)
        console.error(error.response ? error.response.data : error.message);
        res.status(500).send('Error al transcribir audio');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
