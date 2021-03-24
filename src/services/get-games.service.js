import http from "../http-common";

class GetGamesService {
    getAllGames() {
        return http.get("/games/getAllGames")
            .then((res) => {
                console.log(res);
        })
            .catch((err) => {
                console.log(err);
            });
    }
}

export default new GetGamesService();
