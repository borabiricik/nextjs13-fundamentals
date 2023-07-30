import { PropsWithChildren, ReactElement } from "react";

interface Props extends PropsWithChildren {
  analytics?: ReactElement;
  posts?: ReactElement;
  todos?: ReactElement;
}

const DashboardLayout = async ({
  children,
  analytics,
  posts,
  todos,
}: Props) => {
  let isAuthenticated: boolean = true; //! Change me !
  return (
    <div>
      <div className="grid grid-cols-3 items-start space-x-6">
        {posts}
        <div className="col-span-1 flex flex-col space-y-6">
          <p>
            We‘ll do dummy authentication in this section. We‘ll wait for few
            seconds and change authenticated state. For changing the state,
            change isAuthenticated variable to true/false and observe the
            changes below 🥵
          </p>
          {isAuthenticated ? (
            analytics
          ) : (
            <span className="text-red-400">
              You‘re not authenticated to see this part !
            </span>
          )}
          {todos}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
