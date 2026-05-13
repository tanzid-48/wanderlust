"use client";
import { authClient } from "@/app/lib/auth-client";
import {
  Button,
  Card,
  Checkbox,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { LuLock, LuMail } from "react-icons/lu";
import { toast } from "sonner";

const LoginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Login failed. Please try again.");
      return;
    }

    toast.success("Login successful!");
    redirect("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc]  py-5">
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-3">Welcome Back</h1>
        <p className="text-gray-500 text-lg">
          Resume your adventure with{" "}
          <span className="text-gray-600 font-semibold">Wanderlust</span>
        </p>
      </div>

      <Card className="w-full max-w-lg p-10 shadow-sm rounded-none border border-gray-100 bg-white">
        <Form onSubmit={onSubmit} className="flex flex-col gap-6">
          <TextField isRequired name="email" type="email" className="w-full">
            <Label className="font-semibold text-gray-800">Email Address</Label>
            <div className="relative w-full">
              <Input placeholder="Enter your email" className="w-full pl-9" />
            </div>
            <FieldError />
          </TextField>
          <TextField isRequired name="password" className="w-full">
            <Label className="font-semibold text-gray-800">Password</Label>
            <div className="relative w-full">
              <Input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full pl-9"
              />
              <button
                type="button"
                onClick={() => setIsPasswordVisible((v) => !v)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none z-10"
                aria-label={
                  isPasswordVisible ? "Hide password" : "Show password"
                }
              >
                {isPasswordVisible ? (
                  <FiEyeOff size={18} />
                ) : (
                  <FiEye size={18} />
                )}
              </button>
            </div>
            <FieldError />
          </TextField>
          <div className="flex justify-between items-center text-sm">
            <Checkbox
              radius="none"
              size="sm"
              classNames={{ label: "text-gray-500 text-sm" }}
            >
              Remember me
            </Checkbox>
            <Link
              href="/forgot-password"
              className="text-cyan-500 hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>
          <Button
            type="submit"
            isLoading={loading}
            isDisabled={loading}
            className="bg-cyan-500 w-full rounded-none hover:bg-cyan-600 text-white font-semibold py-6 text-base shadow-none transition-colors"
          >
            Sign In
          </Button>
          <div className="flex items-center gap-3">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-xs text-gray-400 uppercase tracking-tight">
              Or continue with
            </span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>
          <Button
            variant="outline"
            className="w-full py-6 font-medium border border-gray-100 hover:bg-gray-200 text-gray-700 rounded-none"
            type="button"
          >
            <FcGoogle size={20} className="mr-2 " />
            Sign In With Google
          </Button>
          <p className="text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-cyan-500 font-bold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
