import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen pt-24">
      <div className="flex flex-col gap-4 items-center justify-center h-[400px] ">
        <h1 className="font-bold text-[clamp(50px,3.5rem,7rem)] ">ShareIt</h1>
        <p>A simeple and efficient file sharing platform</p>
        <Link className={buttonVariants()} href={"/home"}>Get Started</Link>
      </div>
    </div>
  );
};

export default page;
