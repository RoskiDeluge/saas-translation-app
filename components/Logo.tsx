import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";

export default function Logo() {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <div className="dark:text-white light:invert">OmniChat</div>
        </AspectRatio>
      </div>
    </Link>
  );
}
