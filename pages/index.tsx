import Link from "next/link";
import React from "react";
import { Button } from "../components/ui";

const Home = () => {
  return (
    <div className="container pt-12 text-center">
      <h1 className="text-4xl font-bold">Homepage</h1>
      <p className="mt-4 mb-12">
        This is the homepage, from here you can log in.
      </p>

      <Button
        as={Link}
        legacyBehavior={false}
        className="w-max mx-auto"
        href="/login"
      >
        Go to dashboard
      </Button>
    </div>
  );
};

export default Home;
