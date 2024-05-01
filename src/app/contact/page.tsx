import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <h1>Contact Us</h1>
      <p>You can reach us via email at contact@anirate.com.</p>
      <Link href="/about">Go back to About</Link>
    </>
  );
}
