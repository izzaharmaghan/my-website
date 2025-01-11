import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const gallerySections = [
    {
        "text": "STRAY DOGS POPULATION CONTROL CENTRE",
        "number": 3110785804,
        "label": "Some weird label here",
        "address": "123 Main Street, Anytown, USA",
        "images": [
            {
                "src": "https://utfs.io/f/XNbrjM3iH8Zx6RN21ZYPo7RfXWceBM9vmx5Cnj1AZtgaK4lV",
                "dog_name": "Max"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8Zxr6AywPlPodbs5Hwj2nTlIhS764Bpqe9rAayE",
                "dog_name": "Bella"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8Zx0tJWAZGKHIAMSLnVO5hzvDeJ8UlTP2aqyZ1u",
                "dog_name": "Charlie"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8ZxeGHtpCJIRSc3QuewoFvWbH8lG6qLN5JnZkCh",
                "dog_name": "Luna"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8ZxepAcYmJIRSc3QuewoFvWbH8lG6qLN5JnZkCh",
                "dog_name": "Rocky"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8ZxLmhsiy66vS7qtuo9OXZhwMc4fm3JLPYs8NgK",
                "dog_name": "Milo"
            }
        ]
    },    
    {
        "text": "BNU ANIMAL CLUB",
        "number": 3110785804,
        "label": "Some weird label here",
        "address": "123 Main Street, Anytown, USA",
        "images": [
            {
                "src": "https://utfs.io/f/XNbrjM3iH8ZxlZBBQnV2MvrZDUKFyWl0VkcJ3qu8QgfbHis4",
                "dog_name": "Max"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8ZxRXpQkrzbOK2tc8qa5PynwlVs0S4zdohiHvGZ",
                "dog_name": "Bella"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8ZxheLOxOTzuHw9M2joZfQV8X7WOYxPSicLm3se",
                "dog_name": "Charlie"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8Zx9y8kMSDNRPCzGrylQKkmXac9hYte5Voj2AEL",
                "dog_name": "Luna"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8Zx6E9U5wYPo7RfXWceBM9vmx5Cnj1AZtgaK4lV",
                "dog_name": "Rocky"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8Zx60mmrjpYPo7RfXWceBM9vmx5Cnj1AZtgaK4l",
                "dog_name": "Milo"
            }
        ]
    },
    {
        "text": "FALTOO SEY PALTOO",
        "number": 3110785804,
        "label": "Some weird label here",
        "address": "123 Main Street, Anytown, USA",
        "images": [
            {
                "src": "https://utfs.io/f/XNbrjM3iH8ZxlZBBQnV2MvrZDUKFyWl0VkcJ3qu8QgfbHis4",
                "dog_name": "Max"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8ZxRXpQkrzbOK2tc8qa5PynwlVs0S4zdohiHvGZ",
                "dog_name": "Bella"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8ZxheLOxOTzuHw9M2joZfQV8X7WOYxPSicLm3se",
                "dog_name": "Charlie"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8Zx9y8kMSDNRPCzGrylQKkmXac9hYte5Voj2AEL",
                "dog_name": "Luna"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8Zx6E9U5wYPo7RfXWceBM9vmx5Cnj1AZtgaK4lV",
                "dog_name": "Rocky"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8Zx60mmrjpYPo7RfXWceBM9vmx5Cnj1AZtgaK4l",
                "dog_name": "Milo"
            }
        ]
    },
    {
        "text": "LAPSPK",
        "number": 3110785804,
        "label": "Some weird label here",
        "address": "123 Main Street, Anytown, USA",
        "images": [
            {
                "src": "https://utfs.io/f/XNbrjM3iH8ZxlZBBQnV2MvrZDUKFyWl0VkcJ3qu8QgfbHis4",
                "dog_name": "Max"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8ZxRXpQkrzbOK2tc8qa5PynwlVs0S4zdohiHvGZ",
                "dog_name": "Bella"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8ZxheLOxOTzuHw9M2joZfQV8X7WOYxPSicLm3se",
                "dog_name": "Charlie"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8Zx9y8kMSDNRPCzGrylQKkmXac9hYte5Voj2AEL",
                "dog_name": "Luna"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8Zx6E9U5wYPo7RfXWceBM9vmx5Cnj1AZtgaK4lV",
                "dog_name": "Rocky"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8Zx60mmrjpYPo7RfXWceBM9vmx5Cnj1AZtgaK4l",
                "dog_name": "Milo"
            }
        ]
    },
    {
        "text": "ANY SAFE PLACE",
        "number": 3110785804,
        "label": "Some weird label here",
        "address": "123 Main Street, Anytown, USA",
        "images": [
            {
                "src": "https://utfs.io/f/XNbrjM3iH8ZxlZBBQnV2MvrZDUKFyWl0VkcJ3qu8QgfbHis4",
                "dog_name": "Max"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8ZxRXpQkrzbOK2tc8qa5PynwlVs0S4zdohiHvGZ",
                "dog_name": "Bella"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8ZxheLOxOTzuHw9M2joZfQV8X7WOYxPSicLm3se",
                "dog_name": "Charlie"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8Zx9y8kMSDNRPCzGrylQKkmXac9hYte5Voj2AEL",
                "dog_name": "Luna"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8Zx6E9U5wYPo7RfXWceBM9vmx5Cnj1AZtgaK4lV",
                "dog_name": "Rocky"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8Zx60mmrjpYPo7RfXWceBM9vmx5Cnj1AZtgaK4l",
                "dog_name": "Milo"
            }
        ]
    },
    {
        "text": "TODD'S WELFARE SOCIETY",
        "number": 3110785804,
        "label": "Some weird label here",
        "address": "123 Main Street, Anytown, USA",
        "images": [
            {
                "src": "https://utfs.io/f/XNbrjM3iH8ZxlZBBQnV2MvrZDUKFyWl0VkcJ3qu8QgfbHis4",
                "dog_name": "Max"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8ZxRXpQkrzbOK2tc8qa5PynwlVs0S4zdohiHvGZ",
                "dog_name": "Bella"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8ZxheLOxOTzuHw9M2joZfQV8X7WOYxPSicLm3se",
                "dog_name": "Charlie"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8Zx9y8kMSDNRPCzGrylQKkmXac9hYte5Voj2AEL",
                "dog_name": "Luna"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8Zx6E9U5wYPo7RfXWceBM9vmx5Cnj1AZtgaK4lV",
                "dog_name": "Rocky"
            },
            {
                "src": "https://utfs.io/f/XNbrjM3iH8Zx60mmrjpYPo7RfXWceBM9vmx5Cnj1AZtgaK4l",
                "dog_name": "Milo"
            }
        ]
    }    
]

const Page = () => {
    return (
        <>
            <div className="space-y-8 py-10 px-2">
                {gallerySections.map((section, index) => (
                    <Card
                        key={index}
                        className="w-full max-w-6xl"
                    >
                        <CardHeader>
                            <div className={"flex flex-col"}>
                                <Label className="text-lg font-semibold mb-2">
                                    {section.text}
                                </Label>
                                <div
                                    className={
                                        "flex justify-between gap-4"
                                    }
                                >
                                    <Label className="text-sm mb-1 text-muted-foreground">
                                        {section.number}
                                    </Label>
                                    <Label className="text-sm text-muted-foreground mb-1">
                                        {section.label}
                                    </Label>
                                </div>
                                <Label className="text-sm text-muted-foreground">
                                    {section.address}
                                </Label>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {section.images
                                    .slice(0, 3)
                                    .map((src, index) => (
                                        <div
                                            key={index}
                                            className="bg-card p-2 rounded-2xl"
                                        >
                                            <Image
                                                src={src.src}
                                                alt={`Image ${index + 1}`}
                                                width={300}
                                                height={200}
                                                className="rounded-lg object-cover w-full h-40"/>
                                                <Label className={"text-sm"}>{src.dog_name}</Label>
                                        </div>
                                    ))}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {section.images
                                    .slice(3, 6)
                                    .map((src, index) => (
                                        <div
                                            key={index}
                                            className="bg-card p-2 rounded-2xl"
                                        >
                                            <Image
                                                src={src.src}
                                                alt={`Image ${index + 1}`}
                                                width={300}
                                                height={200}
                                                className="rounded-lg object-cover w-full h-40"/>
                                                <Label className={"text-sm"}>{src.dog_name}</Label>
                                        </div>
                                    ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default Page
