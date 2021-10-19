const { useContext } = require("react")
const { AuthContext } = require("../Pages/AuthProvider/AuthProvider")

const useAuth = () => {

    return useContext(AuthContext);
}
export default useAuth;