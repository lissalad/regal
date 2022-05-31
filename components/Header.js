import classNames from "classnames";
import Link from "next/link";

function Header() {
  const navItem = "text-sm px-[2vw] whitespace-nowrap";

  return (
    <div className={classNames("bg-rose-900 flex flex-row w-full justify-between p-4 text-slate-50 items-end")}>
      <Link passHref href="/">
        <p className="">regal</p>
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
