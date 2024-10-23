import React from 'react';

// shadcnUl
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from '../ui/textarea';


const ContactForms = () => {
    return (
        <div>
            <Card className="w-1/2 mx-auto">
                <CardHeader>
                    <CardTitle>Contact Me</CardTitle>
                    <CardDescription>Lorem, ipsum dolor sit amet consectetur adipisicing.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            {/* name input */}
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Name of your project" />
                            </div>
                            {/* email input */}
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Email</Label>
                                <Input id="name" placeholder="Email of your project" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Gender</Label>
                                <Select>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="next">Female</SelectItem>
                                        <SelectItem value="sveltekit">Male</SelectItem>
                                        <SelectItem value="astro">Others</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            {/* Message */}
                            <Textarea placeholder="Type your message here." />
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Submit</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ContactForms;