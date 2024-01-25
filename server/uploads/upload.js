import { v2 as cloundinary } from "cloudinary";
import fs from "fs/promises";

const cloundinaryUpload = async (files) => {
    const fileUrl = [];

    for (let file of files.avatar) {
        const result = await cloundinary.uploader.upload(file.path, {
            folder: "techupth/demo-file-uploading",
            type: "private",
        });

        fileUrl.push({
            url: result.secure_url,
            publicId: result.public_id,
        });
        await fs.unlink(file, path);
    }

    return fileUrl;
};

export { cloundinaryUpload };
