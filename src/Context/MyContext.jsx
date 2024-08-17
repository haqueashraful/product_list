import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Authentication/firebase.config";

export const AuthContext = createContext();

const MyContext = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize user as null
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      setUser(userCredential.user); // Update user state
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const createAccountWithEmailAndPassword = async ({ name, email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await profileUpdate(name);        
      setUser(userCredential.user); // Update user state
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await firebaseSignInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user); // Update user state
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      setUser(null); // Clear user state
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const profileUpdate = async (name) => {
    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: name || auth.currentUser.displayName,
        });
        setUser({ ...auth.currentUser, displayName: name }); // Update user state
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const value = {
    signInWithGoogle,
    signInWithEmailAndPassword,
    createAccountWithEmailAndPassword,
    signOut,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default MyContext;
