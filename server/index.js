import express, { json } from "express";
import multer, { diskStorage } from "multer";
const port = 3001;

const app = express();
app.use(json());

const storage = diskStorage({
  destination: (req, file, cb) => cb(null, "../client/public/uploads/"),
  filename: (req, file, cb) => cb(null, `${file.originalname}`),
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
});

app.listen(port, () => {
  console.log("Server is running");
});
