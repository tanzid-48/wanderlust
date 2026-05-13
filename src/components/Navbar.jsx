"use client";

import { authClient} from "@/app/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoBackspaceSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { toast } from "sonner";

const avatar =
  "https://cdn.create.vista.com/api/media/small/73040253/stock-vector-male-avatar-icon";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
  await authClient.signOut();
  toast.success("Signed out successfully!");
  redirect("/signin");
};

  const navLink = (path) =>
    `font-medium ${pathname === path ? "text-[#15A1BF]" : "text-gray-900"}`;

  const buttonLink = (path) =>
    `px-5 py-2 rounded-full font-medium border text-center ${
      pathname === path
        ? "bg-[#15A1BF] text-white border-[#15A1BF]"
        : "border-[#15A1BF] text-[#15A1BF]"
    }`;

  return (
    <header className="w-full bg-white shadow border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link href="/" className={navLink("/")}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/destinations" className={navLink("/destinations")}>
              Destinations
            </Link>
          </li>

          <li>
            <Link href="/myBooking" className={navLink("/myBooking")}>
              My Booking
            </Link>
          </li>
          <li>
            <Link
              href="/addDestinations"
              className={navLink("/addDestinations")}
            >
              Add Destinations
            </Link>
          </li>
        </ul>
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/Wanderlast.png"
            alt="Wanderlust Logo"
            width={160}
            height={100}
            className="object-contain"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-4">
          <li>
            <Link href="/profile" className={navLink("/profile")}>
              Profile
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Avatar>
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>
                    <Image
                      src={avatar}
                      width={20}
                      height={20}
                      alt="default avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </Avatar.Fallback>
                </Avatar>
              </li>
              <li>
                <Button
                onClick={handleSignOut} 
                variant="danger">Sign Out</Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/signup" className={buttonLink("/signup")}>
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="/signin" className={buttonLink("/signin")}>
                  {" "}
                  Log In
                </Link>
              </li>
            </>
          )}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-[#15A1BF]"
        >
          {open ? <IoBackspaceSharp /> : <RiMenu3Fill />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6">
          <ul className="flex flex-col gap-5">
            <li>
              <Link href="/" className={navLink("/")}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/destinations" className={navLink("/destinations")}>
                Destinations
              </Link>
            </li>

            <li>
              <Link href="/myBooking" className={navLink("/myBooking")}>
                My Booking
              </Link>
            </li>
            <li>
              <Link
                href="/addDestinations"
                className={navLink("/addDestinations")}
              >
                Add Destinations
              </Link>
            </li>

            <li>
              <Link href="/profile" className={navLink("/profile")}>
                Profile
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Avatar>
                    <Avatar.Image alt={user?.name} src={user?.image} />
                    <Avatar.Fallback>
                      <Image
                        src={avatar}
                        width={20}
                        height={20}
                        alt="default avatar"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </Avatar.Fallback>
                  </Avatar>
                </li>
                <li>
                  <Button
                 onClick={handleSignOut}  
                variant="danger">Sign Out</Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/signup" className={buttonLink("/signup")}>
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link href="/signin" className={buttonLink("/signin")}>
                    {" "}
                    Log In
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
