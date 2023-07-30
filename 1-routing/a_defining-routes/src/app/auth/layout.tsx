import { PropsWithChildren } from "react";
import { AuthNavButton } from "./components/AuthNavButton";

const authRoutes = [
  { to: "/auth/login", text: "Login" },
  { to: "/auth/register", text: "Register" },
];

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className="border border-gray-500 p-3 rounded-2xl flex flex-row-reverse items-center space-x-4 space-x-reverse">
        {authRoutes.map((route) => (
          <AuthNavButton to={route.to} key={route.to}>
            {route.text}
          </AuthNavButton>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
