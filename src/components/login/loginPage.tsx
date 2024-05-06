"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-blue-300 rounded-lg shadow-md">
        <div className="mb-4">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            required
            className="w-full mt-1"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            className="w-full mt-1"
          />
        </div>

        <Button type="submit" className="w-full">
          Log In
        </Button>
      </div>
    </div>
  );
}
