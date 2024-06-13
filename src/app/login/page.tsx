"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(
      `Intentando iniciar sesión con usuario: ${username} y contraseña: ${password}`
    );
  };

  return (
    <>
      <main className="w-full p-4">
        <h4 className="font-bold mb-4">Nice to see you again</h4>
        <div className="flex flex-col gap-2">
          <Input type="email" placeholder="Email or phone number" />
          <Input type="password" placeholder="Enter password" />
          <div className="flex justify-between text-xs">
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="Remember me" className="text-xs">
                Remember me
              </Label>
            </div>
            <a className="text-blue-500 font-medium">Forgot password?</a>
          </div>
          <Button className="text-white bg-blue-500">Sign In</Button>
          <div className="w-full border border-gray-100"></div>
          <Button className="text-white bg-zinc-800">
            Or sign in with Google
          </Button>
          <div className="w-full flex justify-center mt-4">
            <p className="text-xs">
              Don't have an account?{" "}
              <span className=" text-blue-500 font-medium">Sign up now</span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;