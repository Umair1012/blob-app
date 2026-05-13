const express = require("express");
const multer = require("multer");
const fs = require("fs");

const { DefaultAzureCredential } = require("@azure/identity");
const { BlobServiceClient } = require("@azure/storage-blob");

const app = express();
const upload = multer({ dest: "uploads/" });

const accountName = "miseblobstorage123";
const containerName = "uploads";

const credential = new DefaultAzureCredential();

const blobServiceClient = new BlobServiceClient(
 `https://${accountName}.blob.core.windows.net`,
 credential
);

app.get("/", (req, res) => {
 res.send(`
   <h1>Upload File to Azure Blob</h1>
   <form method="POST" action="/upload" enctype="multipart/form-data">
     <input type="file" name="file"/>
     <button type="submit">Upload</button>
   </form>
 `);
});

app.post("/upload", upload.single("file"), async (req, res) => {
 try {
   const containerClient =
     blobServiceClient.getContainerClient(containerName);

   const blockBlobClient =
     containerClient.getBlockBlobClient(req.file.originalname);

   await blockBlobClient.uploadFile(req.file.path);

   fs.unlinkSync(req.file.path);

   res.send("File uploaded successfully!");
 } catch (err) {
   console.error(err);
   res.send("Upload failed");
 }
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
