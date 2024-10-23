"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

// shadcnUI
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



const Navber = () => {
    // 
    const pathname = usePathname();

    // navlink
    const navlink = [
        { id: 1, href: "/", title: "Home" },
        { id: 2, href: "/news", title: "News" },
        { id: 3, href: "/about", title: "About" },
        { id: 4, href: "/contact", title: "Contact" },
    ];

    return (
        <div>
            <section className="bg-black text-white fixed top-0 z-50 w-full py-4  transition-all duration-300">
                <div className='container flex items-center justify-between'>
                    {/* logo part */}
                    <div>
                        <Link href={'/'} className="font-bold text-2xl">
                            PROTHOM ALO
                        </Link>
                    </div>
                    {/* manubar part */}
                    <div className="hidden md:flex items-center gap-x-5">
                        {
                            navlink.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className={`${pathname === item.href ? 'font-bold' : 'font-light'}`}
                                >
                                    {item.title}
                                </Link>
                            ))
                        }
                    </div>
                    {/* login part */}
                    <div>
                        <Dialog>
                            <DialogTrigger>
                                Login | Register
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    {/* tabs login or register */}
                                    <Tabs defaultValue="account" className="w-[400px]">
                                        <TabsList className="mb-5 flex justify-center items-center">
                                            <TabsTrigger value="account">Login</TabsTrigger>
                                            <TabsTrigger value="password">Register</TabsTrigger>
                                        </TabsList>
                                        {/* login */}
                                        <TabsContent value="account">
                                            <DialogTitle>Login</DialogTitle>
                                            <div className="space-y-5 pt-4">
                                                {/* login From */}
                                                <div className="flex flex-col space-y-1.5">
                                                    <Label htmlFor="name">Email</Label>
                                                    <Input id="name" placeholder="Enter your email?" />
                                                </div>
                                                <div className="flex flex-col space-y-1.5">
                                                    <Label htmlFor="name">Password</Label>
                                                    <Input id="name" placeholder="Enter your password" />
                                                </div>
                                                <Button className="w-full">Submit</Button>
                                            </div>
                                        </TabsContent>
                                        {/* register */}
                                        <TabsContent value="password">
                                            <DialogTitle>Register</DialogTitle>
                                            <div className="space-y-5 pt-4">
                                                {/* login From */}
                                                <div className="flex flex-col space-y-1.5">
                                                    <Label htmlFor="name">Name</Label>
                                                    <Input id="name" placeholder="Enter your Name?" />
                                                </div>
                                                <div className="flex flex-col space-y-1.5">
                                                    <Label htmlFor="name">Email</Label>
                                                    <Input id="name" placeholder="Enter your email?" />
                                                </div>
                                                <div className="flex flex-col space-y-1.5">
                                                    <Label htmlFor="name">Password</Label>
                                                    <Input id="name" placeholder="Enter your password" />
                                                </div>
                                                <div className="flex flex-col space-y-1.5">
                                                    <Label htmlFor="name">Confirm Password</Label>
                                                    <Input id="name" placeholder="Enter your confirm password" />
                                                </div>
                                                <Button className="w-full">Submit</Button>
                                            </div>
                                        </TabsContent>
                                    </Tabs>

                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Navber;

