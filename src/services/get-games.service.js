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
    getMostRecentGame() {
        return http.get("/games/getMostRecentGame")
            .then((res) => {
                console.log("response:", res);
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export default new GetGamesService();
