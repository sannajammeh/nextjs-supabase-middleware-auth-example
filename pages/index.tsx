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
        This is the homepage, from here you can log in.
      </p>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto flex flex-col text-center"
      >
        <h2 className="text-3xl font-semibold mb-6">Login</h2>
        <Input
          type="email"
          name="email"
          required
          placeholder="Email address"
          className="mb-4"
        />
        <Button type="submit">
          <span>Send magic link</span>
        </Button>
      </form>
    </div>
  );
};

export default Home;
