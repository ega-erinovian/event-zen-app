"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useGetCitiesByCountry from "@/hooks/city/getCitiesByCountry";
import useGetCountries from "@/hooks/country/useGetCountries";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const RegisterComponent = () => {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  // Fetching the list of countries
  const { data: countries = [] } = useGetCountries();

  // Fetch cities by country using modified hook
  const { data: citiesByCountry = [], isLoading: citiesLoading } =
    useGetCitiesByCountry(selectedCountry);

  // When the country changes, reset selected city
  useEffect(() => {
    setSelectedCity(""); // Reset city selection when country changes
  }, [selectedCountry]);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="capitalize text-2xl">
            Create an {role} Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">
                  {role === "customer" ? "Full Name" : "Organization Name"}
                </Label>
                <Input
                  id="name"
                  placeholder={`Enter your ${
                    role === "customer" ? "Full Name" : "Organization Name"
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

              {role === "customer" && (
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="referral">Referral Code (optional)</Label>
                  <Input
                    id="referral"
                    type="text"
                    placeholder="Input a referral code if you have one"
                  />
                </div>
              )}

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone-number">Phone Number</Label>
                <Input id="phone-number" placeholder="+628xxxxxxxxx" />
              </div>

              {/* Country Selection */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="country">Country</Label>
                <Select
                  value={selectedCountry}
                  onValueChange={(value) => setSelectedCountry(value)}>
                  <SelectTrigger className="w-full text-black">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {countries.map((country) => (
                        <SelectItem key={country.id} value={country.name}>
                          {country.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* City Selection */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="city">City</Label>
                <Select
                  value={selectedCity}
                  onValueChange={(value) => setSelectedCity(value)}
                  disabled={!selectedCountry || citiesLoading} // Disable the dropdown if loading or no country is selected
                >
                  <SelectTrigger className="w-full text-black">
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {citiesLoading && (
                        <SelectItem value="-" disabled>
                          Loading cities...
                        </SelectItem>
                      )}
                      {citiesByCountry.length > 0 ? (
                        citiesByCountry.map((city) => (
                          <SelectItem key={city.id} value={city.name}>
                            {city.name}
                          </SelectItem>
                        ))
                      ) : (
                        <SelectItem value="-" disabled>
                          No cities available
                        </SelectItem>
                      )}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <Input id="role" type="hidden" value={role!} />

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
