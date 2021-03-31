import axios from 'axios'
const USERS_REST_API_URL='http://localhost:8080/user/login';
const USERS_REST_API_URL1='http://localhost:8080/user/signup';
const USERS_REST_API_URL2='http://localhost:8080/admin/addpharma';
const USERS_REST_API_URL3='http://localhost:8080/pharma/addmedicine';
const USERS_REST_API_URL4='http://localhost:8080/pharma/searchMedicine';
const USERS_REST_API_URL5='http://localhost:8080/user/searchMedicine';
const USERS_REST_API_URL6='http://localhost:8080/user/placeOrder';
const USERS_REST_API_URL7='http://localhost:8080/pharma/seeorder';
const USERS_REST_API_URL8='http://localhost:8080/user/userOrder';
const USERS_REST_API_URL9='http://localhost:8080/admin/getMedicals';
const USERS_REST_API_URL10='http://localhost:8080/admin/deleteMedicals';
const USERS_REST_API_URL11='http://localhost:8080/pharma/sellmedicines';

//creating class userservice
class UserService {
    loginuser(login){
        return axios.post(USERS_REST_API_URL,login);
    }

    signupuser(signup){
        return axios.post(USERS_REST_API_URL1,signup);
    }
    addMedical(medical){
        return axios.post(USERS_REST_API_URL2,medical);
    }
    addMedicine(medicine){
        return axios.post(USERS_REST_API_URL3,medicine);
    }
    searchMedicine(medicine){
        return axios.post(USERS_REST_API_URL4,medicine);
    }
    searchMedical(userSearch){
        return axios.post(USERS_REST_API_URL5,userSearch);
    }
    placeOrder(order){
        return axios.post(USERS_REST_API_URL6,order);
    }
    seeOrder(email){
        return axios.post(USERS_REST_API_URL7,email);
    }

    getUserPlacedOrders(email){
        return axios.post(USERS_REST_API_URL8,email)
    }

    getMedicals(){
        return axios.get(USERS_REST_API_URL9)
    }

    deleteMedical(id){
        return axios.post(USERS_REST_API_URL10,id)
    }

    sellmedicines(sellmedicines){
        return axios.post(USERS_REST_API_URL11,sellmedicines)
    }

}
//exporting object of userservice
export default new UserService();