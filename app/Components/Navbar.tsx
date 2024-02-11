import { Button } from "./Button";
import Link from "next/link";

export const Navbar = () => {
  const isLoggedIn = false;
  return (
    <div className="shadow-md shadow-slate-400 outline outline-1 outline-slate-400 rounded-xl ml-10 mr-10 mt-10 p-5">
      <h1 className="font-semibold text-2xl">Heres your Feed for Today!</h1>
      <div className="flex flex-col w-full">
        {!isLoggedIn && (
          <>
            <Link href="/register" className="flex flex-col">
              <Button text="Register" type="button" />
            </Link>
            <Link href="/login" className="flex flex-col">
              <Button text="Log In" type="button" />
            </Link>
          </>
        )}
        {isLoggedIn && (
          <>
            <Link href="/profile" className="flex flex-col">
              <Button text="View Your Profile" type="button" />
            </Link>
            <Button text="Log Out" type="button" />
          </>
        )}
      </div>
    </div>
  );
};
