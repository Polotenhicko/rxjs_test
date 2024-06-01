import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/ahahaha?test=123"}>Test</Link>
    </div>
  );
}
