import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const navItem = "text-sm px-[2vw] whitespace-nowrap";

  return (
    <div
      className={classNames(
        "bg-rose-900 flex flex-col w-full justify-between p-4 text-slate-50 items-center"
      )}
    >
      <Link passHref href="/">
        <div className={classNames("flex flex-row items-end")}>
          <p className="costa p-1 text-4xl w-fit">regal</p>
          <Image
            src={"/images/icon.png"}
            alt="icon"
            width="70"
            height="70"
            objectFit="contain"
          />
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
