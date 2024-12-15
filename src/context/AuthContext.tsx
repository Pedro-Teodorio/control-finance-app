import { createContext, ReactNode, useState } from "react";

interface AuthContextType {
  token: string;
  addToken: (token: string) => void;
}

type Props = {
  children: ReactNode;
};
export const AuthContext = createContext<AuthContextType>({
  token: "",
  addToken: () => {},
});

export function AuthProvider({ children }: Props) {
  const [token, setToken] = useState("");
  const addToken = (newToken: string) => {
    setToken(newToken);
  };
  return (
    <AuthContext.Provider value={{ token, addToken }}>
      {children}
    </AuthContext.Provider>
  );
}
