"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { RedirectType, redirect } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

console.log("Hola como estas")

const LoginPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const login = async (values: z.infer<typeof formSchema>) => {
    try{
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email, password: values.password }),
      });
      const data = await response.json();
      console.log(data)
      redirect("/dashboard", RedirectType.replace)

    }catch(err : any){
      throw new Error(err.message);
    }
  };

  return (
    <>
      <main className="w-full p-4">
        <h4 className="font-bold mb-4">Nice to see you again</h4>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(login)}
            className="flex gap-4 w-full flex-col"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email or phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <div className="flex justify-between text-xs mt-2">
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="Remember me" className="text-xs">
                  Remember me
                </Label>
              </div>
              <a className="text-blue-500 font-medium">Forgot password?</a>
            </div>
            <Button className="text-white bg-blue-500 my-2" type="submit">
              Sign In
            </Button>
            <div className="w-full border border-gray-100"></div>
            <Button className="text-white bg-zinc-800 mt-2">
              Or sign in with Google
            </Button>
          </form>
        </Form>
        <div className="w-full flex justify-center mt-4">
          <p className="text-xs">
            Don&apos;t have an account?{" "}
            <span className=" text-blue-500 font-medium">Sign up now</span>
          </p>
        </div>
      </main>
    </>
  );
};
export default LoginPage;
