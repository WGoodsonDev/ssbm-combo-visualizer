import http from "../http-common";

class UploadFilesService {
    upload(file, onUploadProgress) {
        let formData = new FormData();

        formData.append("file", file);

        return http.post("/games/uploadGame", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        }).then((res) => {
            console.log(res);
        })
            .catch((err) => {
                console.log(err);
            });
    }
}

export default new UploadFilesService();
