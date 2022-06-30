import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import DressIcon from "./svg/DressIcon";

function Header() {
  const navItem = "text-sm px-[2vw] whitespace-nowrap";

  return (
    <div
      className={classNames(
        "bg-rose-900 flex flex-col w-full justify-between p-4 text-slate-50"
      )}
    >
      <Link passHref href="/">
        <div className={classNames("flex flex-col items-center justify-left w-fit -mt-1")}>
          {/* <DressIcon /> */}
          <Image
            src={"/icons/icon.png"}
            alt="icon"
            width="50"
            height="50"
            objectFit="contain"
          />
          <p className="costa text-[40px] w-fit mx-4 -mt-5">regal</p>
        </div>
      </Link>

      <div className={classNames("flex flex-row justify-between")}>
        {/* <Link passHref href="/floral"> */}
        {/* <a className={navItem}>floral</a> */}
        {/* </Link> */}
        {/* <Link passHref href="">
          <a className={navItem}>nav</a>
        </Link> */}
        {/* <Link passHref href="">
          <a className={navItem}>nav</a>
        </Link> */}
      </div>
    </div>
  );
}

export default Header;
