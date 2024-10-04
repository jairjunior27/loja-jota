import { SigninForm } from "@/app/components/auth/signin-form";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="max-w-lg mx-auto mt-12 bg-yellow-400 p-4 rounded-3xl">
      <h1 className="text-center text-gray-500 font-bold text-lg mb-4">
        Entre na sua conta
      </h1>
      <SigninForm />
      <div className="my-3 flex  flex-col items-center justify-center md:flex-row">
        <p>Ainda não tem uma conta?</p>
        <Link href="/signout" className="text-gray-500 hover:underline ml-2">
          Cadastre-se
        </Link>
      </div>
    </div>
  );
}
