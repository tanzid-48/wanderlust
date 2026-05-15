"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect} from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "sonner";

const SignUpPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [loading, setLoading] = useState(false);


  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.photoURL || undefined,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Sign up failed. Please try again.");
      return;
    }

    toast.success("Account created successfully! Please sign in.");
    redirect("/signin");
  };

    const handleGoogleSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
     if (error) {
      toast.error(error.message || "Google sign in failed.");
      return; 
    }
    else{
     toast.success("Google login successful!");
    }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4 py-10">
      <Card className="w-full max-w-lg p-8 shadow-sm rounded-none border-none bg-white">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-serif text-gray-800 mb-2">
            Create Account
          </h2>
          <p className="text-gray-500">
            Start your adventure with{" "}
            <span className="text-cyan-600 font-semibold">Wanderlust</span>
          </p>
        </div>

        <Form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
          <TextField isRequired className="w-full" name="name">
            <Label>Full Name</Label>
            <Input type="text" placeholder="Enter Your Name" />
            <FieldError />
          </TextField>

          <TextField className="w-full" name="photoURL">
            <Label>Photo URL</Label>
            <Input type="url" placeholder="https://example.com/photo.jpg" />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            validate={(value) => {
              if (value.length < 8)
                return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value))
                return "Password must contain at least one uppercase letter";
              if (!/[0-9]/.test(value))
                return "Password must contain at least one number";
              return null;
            }}
          >
            <Label>Password</Label>
            <div className="relative w-full">
              <Input placeholder="Enter your password" className="w-full" />
              <button
                type="button"
                onClick={() => setIsPasswordVisible((v) => !v)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none z-10"
                aria-label={isPasswordVisible ? "Hide password" : "Show password"}
              >
                {isPasswordVisible ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="confirmPassword"
            type={isConfirmVisible ? "text" : "password"}
            validate={(value) => {
              if (value.length < 8)
                return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value))
                return "Password must contain at least one uppercase letter";
              if (!/[0-9]/.test(value))
                return "Password must contain at least one number";
              return null;
            }}
          >
            <Label>Confirm Password</Label>
            <div className="relative w-full">
              <Input placeholder="Confirm your password" className="w-full" />
              <button
                type="button"
                onClick={() => setIsConfirmVisible((v) => !v)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none z-10"
                aria-label={isConfirmVisible ? "Hide password" : "Show password"}
              >
                {isConfirmVisible ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
            <FieldError />
          </TextField>

          <div className="pt-2 flex flex-col gap-4">
            <Button
              className="bg-cyan-500 hover:bg-cyan-600 text-white w-full font-bold h-11 shadow-lg shadow-cyan-100"
              type="submit"
              isLoading={loading}
              isDisabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>

            <div className="flex items-center gap-3">
              <div className="h-px bg-gray-200 flex-1" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                OR
              </span>
              <div className="h-px bg-gray-200 flex-1" />
            </div>

            <Button
             onClick={handleGoogleSignIn}
              variant="bordered"
              className="w-full h-11 font-medium border-gray-200 bg-gray-200 hover:bg-gray-300"
              type="button"
            >
              <FcGoogle size={20} />
              Sign Up With Google
            </Button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/signin" className="text-cyan-500 font-bold hover:underline">
              Sign In
            </Link>
          </p>
        </Form>
      </Card>
    </div>
  );
};

export default SignUpPage;
