import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Here&apos;s my layout practice projects</h1>
      <ul>
        <li>
          <Link href="/netflix">Netflix</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
