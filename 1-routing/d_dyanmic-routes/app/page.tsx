import { Form } from "./components/Form";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <h2>
        Please Enter a Random User ID to navigate (It`s type can be be both
        string and):
      </h2>
      <Form />
    </div>
  );
}
