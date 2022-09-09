import Link from "next/link";
import React from "react";
import { Button, Input } from "../components/ui";

const Home = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
    };
    const email = target.email.value;
    console.log(email);
  };

  return (
    <div className="container pt-12 text-center">
      <h1 className="text-4xl font-bold">Homepage</h1>
      <p className="mt-4 mb-12">
        This is the homepage, from here you can go to the dashboard
      </p>

      <Button
        href="/dashboard"
        as={Link}
        legacyBehavior={false}
        className="mx-auto w-max"
      >
        <span>Go to dashboard</span>
      </Button>
    </div>
  );
};

export default Home;
