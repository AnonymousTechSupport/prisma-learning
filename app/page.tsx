import { Feed, Button } from "./Components";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="ml-10 mr-10">
        <Link href="/create-post">
          <Button text="Create A Post" type="button" />
        </Link>
        <Feed />
      </div>
    </main>
  );
}
