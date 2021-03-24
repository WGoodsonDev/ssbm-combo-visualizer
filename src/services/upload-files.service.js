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
        });
    }

    // getFiles() {
    //     return http.get("/games/getGames");
    // }
}

export default new UploadFilesService();
