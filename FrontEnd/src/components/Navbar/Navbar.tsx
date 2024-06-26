"use client"
import CustomButtonWithArrow from "../utils/Buttons/ArrowButton";
import { useAuth } from "@/Auth/AuthContext";
// import { useAdmin } from "@/Global/Admin/User";
// import Avatar from "@mui/material/Avatar";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
//   const { data } = useAdmin();

//   const handleLogout = () => {
//     logout();
//     router.push("/");
//   };

  return (
    <header className="flex justify-center p-0.5 shadow-md sticky top-0 z-10 bg-white">
      <div className="h-fit absolute right-[0.5cm] top-3">
        {isAuthenticated ? (
          <CustomButtonWithArrow
            variant={"primary"}
            kind={"elevated"}
            size={"big"}
            colorMode={"dark"}
            path={"(/)"}
            text={"Logout"}
          />
        ) : (
          <CustomButtonWithArrow
          variant={"primary"}
          kind={"elevated"}
          size={"big"}
          colorMode={"dark"}
          path={"/login"}
          text={"Login"}
        />
        )}
      </div>
      <Link href="/">
          <Image
            className="cursor-pointer"
            src="/home/Logo.png"
            alt="Logo"
            width={150} // Set the appropriate width
            height={150} // Set the appropriate height
          />
      </Link>
      {/* <div className={style.user}>
        {isAuthenticated && data &&
          data.map((user, index) => (
            <div key={index}>
              <Link href="/account/profile">
                <a>
                  <Avatar
                    alt={user.username}
                    src={`/images/profiles/${user.image}`}
                  />
                </a>
              </Link>
              <div className="text-base text-black relative -bottom-[0.8cm] left-[1.2cm]">
                <h1>{`Hi, ${user.username}`}</h1>
              </div>
            </div>
          ))}
      </div> */}
    </header>
  );
};

export default Navbar;
