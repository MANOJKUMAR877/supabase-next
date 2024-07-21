"use client";
import React from "react";
import { KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { supabaseBrowser } from "@/lib/supabase/browser";

export default function page() {
  const handleLoginOauth = (provider: "github" | "google") => {
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
  };
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-96 rounded-md border p-5  space-y-5">
        <div className="flex items-center gap-2">
          {" "}
          <KeyRound />
          <h1 className="text-2xl font-bold">Next + Supabase </h1>
        </div>

        <p className="text-sm text-gray-300">Register Today</p>
        <div className="flex flex-col gap-y-5">
          <Button
            onClick={() => {
              handleLoginOauth("github");
            }}
            className="w-full flex items-center gap-2"
            variant="outline"
          >
            <FaGithub /> Github
          </Button>
          <Button
            onClick={() => {
              handleLoginOauth("google");
            }}
            className="w-full flex items-center gap-2"
            variant="outline"
          >
            <FcGoogle /> Google
          </Button>
        </div>
      </div>
    </div>
  );
}
