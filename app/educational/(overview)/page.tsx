import Image from 'next/image'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {Label} from "@/components/ui/label";

interface CardProps {
    imageSrc: string
    imageAlt: string
    text: string
    description: string
}

const cardContent: CardProps[] = [
    {
        imageSrc: "https://utfs.io/f/XNbrjM3iH8ZxrPhdmPlPodbs5Hwj2nTlIhS764Bpqe9rAayE",
        imageAlt: "Image 1",
        text: "YOUR GUIDE TO RABIES AWARENESS",
        description: "The sun was setting, casting a warm orange glow over the horizon. Birds flew in formation, returning to their nests for the night. The air was cool, with a gentle breeze rustling through the trees. People strolled along the path, enjoying the peaceful evening. It was a perfect moment to pause and appreciate the beauty of nature.",
    },
    {
        imageSrc: "https://utfs.io/f/XNbrjM3iH8ZxrCGw2plPodbs5Hwj2nTlIhS764Bpqe9rAayE",
        imageAlt: "Image 2",
        text: "",
        description: "The sun was setting, casting a warm orange glow over the horizon. Birds flew in formation, returning to their nests for the night. The air was cool, with a gentle breeze rustling through the trees. People strolled along the path, enjoying the peaceful evening. It was a perfect moment to pause and appreciate the beauty of nature.",
    },
    {
        imageSrc: "",
        imageAlt: "",
        text: "WORLD STRAY ANIMALS DAY",
        description: "The sun was setting, casting a warm orange glow over the horizon. Birds flew in formation, returning to their nests for the night. The air was cool, with a gentle breeze rustling through the trees. People strolled along the path, enjoying the peaceful evening. It was a perfect moment to pause and appreciate the beauty of nature.",
    },
]
const Page = () => {
    return (
        <div className="w-full max-w-4xl mx-auto py-10 px-2">
            <Card>
                <CardHeader>
                    <CardTitle className={"font-bold text-3xl leading-none"}>EDUCATE TO ADVOCATE</CardTitle>
                    <Label className={"text-base font-bold text-gray-700"}>ALL ABOUT STRAY DOGS</Label>
                </CardHeader>
                <CardContent className="space-y-4">
                    {cardContent.map((content, index) => (
                        <div key={index}
                             className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                            {index === 2 ? null : <div className={"w-full border-2 rounded-3xl p-2"}>
                                <AspectRatio ratio={4 / 2}>
                                    <Image src={content.imageSrc} alt={content.imageAlt} fill={true}
                                           className="rounded-2xl object-cover"/>
                                </AspectRatio>
                            </div>}
                            <div className={"w-full flex flex-col"}>
                                <Label className="text-sm">{content.text}</Label>
                                <Label
                                    className="text-sm text-gray-700">{content.description}</Label>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>

    )
}

export default Page