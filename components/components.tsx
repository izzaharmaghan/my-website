"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Instagram, Mail, Menu, PawPrint, Phone, Check } from "lucide-react"
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"  
import { Label } from "@/components/ui/label"
import clsx from "clsx"

const menuItems = [
    {
        trigger: "ABOUT US",
        href: "/",
    },
    {
        trigger: "ADOPTION",
        href: "/adoption",
    },
    {
        trigger: "EDUCATIONAL CONTENT",
        href: "/educational",
    },
    {
        trigger: "FEEDBACK",
        href: "/feedback",
    },
]

export function TopNavigation() {
    const pathname = usePathname()
    return (
        <div className="p-2">
            <div className="flex h-16 items-center px-4 rounded-xl bg-card/75">
                <div className="w-full flex flex-row items-center justify-between">
                    <Link
                        href="/"
                        className="mr-6 flex items-center space-x-2"
                    >
                        <PawPrint className="min-h-4 min-w-4" />
                        <Label className="sm:inline-block cursor-pointer font-semibold">
                            STRAY SOUL SAVIOUR
                        </Label>
                    </Link>
                    <Menubar className="hidden lg:flex">
                        {menuItems.map((item, index) => (
                            <MenubarMenu key={index}>
                                <Link
                                    href={item.href}
                                    passHref
                                    legacyBehavior
                                >
                                    <MenubarTrigger
                                        className={clsx(
                                            "text-gray-600 cursor-pointer hover:bg-gray-100",
                                            pathname === item.href &&
                                                "bg-red-500 text-primary-foreground hover:bg-red-500"
                                        )}
                                    >
                                        {item.trigger}
                                    </MenubarTrigger>
                                </Link>
                            </MenubarMenu>
                        ))}
                    </Menubar>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger><Button variant="ghost" className={"bg-card lg:hidden"}><Menu /></Button></DropdownMenuTrigger>
                    <DropdownMenuContent>
                    {menuItems.map((value, index)=> (
                                    <div key={index}>
                                        <Link href={value.href}>
                                            <DropdownMenuItem
                                                className={clsx(
                                                "cursor-pointer",
                                                pathname === value.href && "bg-red-500 text-primary-foreground hover:bg-red-500"
                                            )}>{value.trigger}</DropdownMenuItem>
                                        </Link>
                                    </div>
                                ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* You can add a search bar or other elements here */}
                    </div>
                    <Link href={"/donate"}>
                        <Button className="h-8 w-full">DONATE</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export function Footer() {
    const [copied, setCopied] = useState({
        number: false,
        email: false,
        instagram: false,
    })

    return (
        <footer className="text-gray-600 p-2">
            <div className={"rounded-xl bg-card/75"}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div>
                            <Link
                                href="/"
                                className="flex items-center mb-4"
                            >
                                <span className="sr-only">
                                    StraySoulSaviour
                                </span>
                                <PawPrint className="w-auto" />
                                <span className="ml-2 font-medium">
                                    STRAY SOUL SAVIOUR
                                </span>
                            </Link>
                            <p className="text-sm">
                                We are dedicated to providing the best service
                                to our customers.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-medium mb-4">
                                Other platforms
                            </h3>
                            <div className={"flex flex-col gap-2"}>
                                <Label
                                    className={
                                        "flex flex-row items-center gap-2 cursor-pointer"
                                    }
                                    onClick={() => {
                                        navigator.clipboard
                                            .writeText(
                                                "straysoulsaviour@gmail.com"
                                            )
                                            .then(() => {
                                                setCopied((prevState) => ({
                                                    ...prevState,
                                                    email: true,
                                                }))
                                            })
                                        setTimeout(() => {
                                            setCopied((prevState) => ({
                                                ...prevState,
                                                email: false,
                                            }))
                                        }, 2000)
                                    }}
                                >
                                    <Mail /> straysoulsaviour@gmail.com{" "}
                                    {copied.email && (
                                        <Check className="text-green-500" />
                                    )}
                                </Label>
                                <Label
                                    className={
                                        "flex flex-row items-center gap-2 cursor-pointer"
                                    }
                                    onClick={() => {
                                        navigator.clipboard
                                            .writeText("3009509012")
                                            .then(() => {
                                                setCopied((prevState) => ({
                                                    ...prevState,
                                                    number: true,
                                                }))
                                                setTimeout(() => {
                                                    setCopied((prevState) => ({
                                                        ...prevState,
                                                        number: false,
                                                    }))
                                                }, 2000)
                                            })
                                    }}
                                >
                                    <Phone /> 3009509012{" "}
                                    {copied.number && (
                                        <Check className="text-green-500" />
                                    )}
                                </Label>
                                <Label
                                    className={
                                        "flex flex-row items-center gap-2 cursor-pointer"
                                    }
                                    onClick={() => {
                                        navigator.clipboard
                                            .writeText(
                                                "https://www.instagram.com/straysoulsaviour/"
                                            )
                                            .then(() => {
                                                setCopied((prevState) => ({
                                                    ...prevState,
                                                    instagram: true,
                                                }))
                                                setTimeout(() => {
                                                    setCopied((prevState) => ({
                                                        ...prevState,
                                                        instagram: false,
                                                    }))
                                                }, 2000)
                                            })
                                    }}
                                >
                                    <Instagram /> straysoulsaviour{" "}
                                    {copied.instagram && (
                                        <Label className="text-green-500 flex flex-row items-center gap-1">
                                            <Check />
                                            Full Link Copied
                                        </Label>
                                    )}
                                </Label>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-medium mb-4">
                                Donate to make a difference 💞💞
                            </h3>
                            <Link href={"/donate"}>
                                <Button className="w-full">DONATE</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-8 border-t"></div>
                    <div className="mt-8 text-center text-sm">
                        <p>
                            &copy; {new Date().getFullYear()} Your Company. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
