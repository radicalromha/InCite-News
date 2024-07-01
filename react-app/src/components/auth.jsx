import { auth, googleProvider } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import styled from "styled-components";

const AuthContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-right: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContainer>
      <Input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={signIn}>Sign in</Button>
      <Button onClick={signInWithGoogle}>Google</Button>
      <Button onClick={logOut}>Logout</Button>
    </AuthContainer>
  );
};

export default Auth;
