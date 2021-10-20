import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";



initializeAuthentication();
const useFirebase = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();





    const toogleLogin = (e) => {
        setIsLogin(e.target.checked)

    }


    const GoogleSignIn = () => {
        setIsLoading(true)

        return signInWithPopup(auth, googleProvider);





    }

    const handelChangeEmail = (e) => {
        setEmail(e.target.value)

    }
    const handelChangePassword = (e) => {
        setPassword(e.target.value)

    }

    const handleRegistration = (event) => {
        event.preventDefault();

        if (password.length < 6) {
            setError("password must be 6 characters long")
            return;
        }
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError("Ensure password has two digits. ")
        }

        isLogin ? processLogin(email, password) : createNewUser(email, password)


    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(result.user)
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))



    }

    const varifyEmail = () => {

        sendEmailVerification(auth.currentUser)
            .then(result => {
                setUser(result);
                console.log(result)
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))

    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                setError('');
                varifyEmail();
                SetUserName();


            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))


    }

    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {

            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))




    }

    const handelSetName = (e) => {
        setName(e.target.value);

    }

    const SetUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => {

            })
            .catch(error => {
                setError(error.message)
            })

    }





    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsLoading(false);

        });
        return () => unsubscribe;
    }, [])


    const logOut = () => {
        setIsLoading(true)

        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))

    }



    return {
        logOut,
        user,
        setError,
        setUser,
        GoogleSignIn,
        handelChangeEmail,
        handelChangePassword,
        handleRegistration,
        error,
        toogleLogin,
        isLogin,
        resetPassword,
        handelSetName,
        setIsLoading,
        isLoading,
        processLogin

    }


}
export default useFirebase;