"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "next/navigation";

const LoginComponent = () => {
  const searchParams = useSearchParams(); // Access the query parameters
  const role = searchParams.get("role"); // Get the 'role' query parameter

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="w-[600px]">
        <CardHeader>
          {/* Take the role from query on the url when user choose want to be organizer or customer */}
          <CardTitle className="capitalize">Login</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, nemo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="flex justify-end">
                <Button>Submit</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginComponent;
