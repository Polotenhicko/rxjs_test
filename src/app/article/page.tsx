import Link from "next/link";

export default function Article() {
  return (
    <div>
      <h1>Article</h1>
      <Link href={"article/login"}>/Login</Link>
    </div>
  );
}
