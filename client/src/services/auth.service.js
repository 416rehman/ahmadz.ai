import axios from "axios";

const API_URL = "http://localhost:5000/api/";

class AuthService {
    authenticate() {
        return axios
            .get(API_URL)
            .then(response => {
                if (response.data.id) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();