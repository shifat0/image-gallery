import * as actionTypes from "./ActionTypes";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcFpUTBeuMKUQoJX0UH0OOf91lPndUW4I",
  authDomain: "burger-builder-5486f.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const selectCategory = (category) => {
  return {
    type: actionTypes.SELECT_CATEGORY,
    payload: category,
  };
};

export const authSuccess = (name, token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: {
      name: name,
      token: token,
      userId: userId,
    },
  };
};

export const authLoading = (isLoading) => {
  return {
    type: actionTypes.AUTH_LOADING,
    payload: isLoading,
  };
};

export const authError = (errMsg) => {
  return {
    type: actionTypes.AUTH_FAILURE,
    payload: errMsg,
  };
};

export const authLogin = (email, password) => {
  authLoading(true);
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(
          authSuccess(
            userCredential.user.displayName,
            userCredential.user.accessToken,
            userCredential.user.uid
          )
        );
        dispatch(authLoading(false));
        localStorage.setItem("token", userCredential.user.accessToken);
      })
      .catch((err) => {
        dispatch(authLoading(false));
        dispatch(authError(err.message));
      });
  };
};

export const authSignup = (name, email, password) => {
  authLoading(true);
  return async (dispatch) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: name,
        }).then(() => {
          dispatch(
            authSuccess(
              userCredential.user.displayName,
              userCredential.user.accessToken,
              userCredential.user.uid
            )
          );
          dispatch(authLoading(false));
          localStorage.setItem("token", userCredential.user.accessToken);
        });
      })
      .catch((err) => {
        dispatch(authLoading(false));
        dispatch(authError(err.message));
      });
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expiresIn");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
