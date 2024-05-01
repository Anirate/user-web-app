import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <>
      <h1>About Us</h1>
      <p>This is the about page for Anirate.</p>
      <Link href="/">Go back home</Link>
    </>
  );
}
