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

const RegisterComponent = () => {
  const searchParams = useSearchParams(); // Access the query parameters
  const role = searchParams.get("role"); // Get the 'role' query parameter

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="w-[600px]">
        <CardHeader>
          {/* Take the role from query on the url when user choose want to be organizer or customer */}
          <CardTitle className="capitalize">Create an {role} Account</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, nemo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                {/* FUll Name for CUSTOMER role */}
                <Label htmlFor="name">
                  {role === "customer" ? "Full-Name" : "Organization Name"}
                </Label>
                <Input
                  id="name"
                  placeholder={`Enter your ${
                    role === "customer" ? "Full-Name" : "Organization Name"
                  }`}
                />
              </div>
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
              {/* This input only appear on CUSTOMER role */}
              {role === "customer" ? (
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="referral">Referral Code (optional)</Label>
                  <Input
                    id="referral"
                    type="text"
                    placeholder="input a referral code if you have one"
                  />
                </div>
              ) : null}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone-number">Phone Number</Label>
                <Input id="phone-number" placeholder="+628xxxxxxxxx" />
              </div>
              {/* Role will be filled according to the params */}
              <Input id="phone-number" type="hidden" value={role!} />
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

export default RegisterComponent;
