import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <main className="flex flex-col gap-8 items-center justify-center">
        <h1>This page is under maintenance. Please come back later.</h1>
        <Link href={"/dashboard/customer/1"}>
          <Button>I am a Customer</Button>
        </Link>
        <Link href={"/dashboard/organizer/1"}>
          <Button>I am an Organizer</Button>
        </Link>
      </main>
    </div>
  );
}
