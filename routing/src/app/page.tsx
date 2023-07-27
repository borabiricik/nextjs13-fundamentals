import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-3">
      <Link className="border border-white p-3" href={"/auth/register"}>
        Click to start assuming register :)
      </Link>
    </div>
  );
}
