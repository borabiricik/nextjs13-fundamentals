"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

const Form = () => {
  const [routeValue, setrouteValue] = useState<string>("");
  const router = useRouter();
  return (
    <div className="flex items-stretch space-x-6">
      <Input
        value={routeValue}
        onChange={(e) => setrouteValue(e.target.value)}
      />
      <Button onClick={() => router.push(`/user/${routeValue}`)}>
        Click to go Dynamic Route
      </Button>
    </div>
  );
};

export { Form };
