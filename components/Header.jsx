import React from "react";
import { ImFacebook2, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
function header() {
  return (
    <header className="bg-gray">
      <div className="w-full flex flex-col items-center text-center py-3 xl:container xl:mx-auto sm:flex-row sm:justify-between ">
        <div className="w-96 order-2 sm:order-1 md:flex-none flex justify-center py-4 sm:py-0">
          <input type="text" placeholder="Search..." className="input-text" />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href={"/"}>
            <a href="" className="font-bold uppercase text-3xl">
              Design
            </a>
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center ">
          <div className="flex gap-6">
            <Link href={"/"}>
              <a href="">
                <ImFacebook2 color="888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a href="">
                <ImTwitter color="888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a href="">
                <ImYoutube color="888888" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;
