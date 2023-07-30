import { PropsWithChildren, ReactElement } from "react";

interface Props extends PropsWithChildren {
  analytics?: ReactElement;
  posts?: ReactElement;
  todos?: ReactElement;
}

const DashboardLayout = ({ children, analytics, posts, todos }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-3 items-start space-x-6">
        {posts}
        <div className="col-span-1 flex flex-col space-y-6">
          {analytics}
          {todos}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
