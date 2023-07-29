import { PropsWithChildren } from "react";

const ProfileLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-2xl">You are now in Profile Pages</h2>
      <div>{children}</div>
    </div>
  );
};

export default ProfileLayout;
