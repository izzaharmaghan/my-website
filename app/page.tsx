import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { DynaPuff } from "next/font/google"
import { PawPrint } from "lucide-react"

const dyna = DynaPuff({
    subsets: ["latin"],
})

interface ContentSection {
    imageSrc: string
    imageAlt: string
    heading: string
    emoji: string
    description?: string
}

const cardContent: ContentSection[] = [
    {
        imageSrc:
            "https://utfs.io/f/XNbrjM3iH8ZxrPhdmPlPodbs5Hwj2nTlIhS764Bpqe9rAayE",
        imageAlt: "Image 1",
        heading: "ABOUT US",
        emoji: "👥",
        description:
            "At Straysoulsaviour, we are committed to bringing change in the lives of stray dogs. Our website serves as a vital link that unites compassionate individuals who want to adopt stray dogs to those already dedicated to this noble cause, by bringing these two groups together, we can ensure that every dog secures a safe place..",
    },
    {
        imageSrc:
            "https://utfs.io/f/XNbrjM3iH8ZxrCGw2plPodbs5Hwj2nTlIhS764Bpqe9rAayE",
        imageAlt: "Image 2",
        heading: "OUR GOALS",
        emoji: "🚀",
        description:
            "The sun was setting, casting a warm orange glow over the horizon. Birds flew in formation, returning to their nests for the night. The air was cool, with a gentle breeze rustling through the trees. People strolled along the path, enjoying the peaceful evening. It was a perfect moment to pause and appreciate the beauty of nature.",
    },
]

const Page = () => {
    return (
        <div className="space-y-4 w-full max-w-4xl mx-auto py-10 px-2 lg:px-0">
            <Card className="max-h-64">
                <CardContent className="flex items-center justify-between p-6">
                    <Label className={`${dyna.className} text-4xl lg:text-6xl font-bold`}>
                        ADOPT DON{`'`}T SHOP
                    </Label>
                    <PawPrint className="sm:max-w-20 sm:max-h-20 w-full h-full max-w-10 max-h-10"/>
                </CardContent>
            </Card>

            {cardContent.map((content, index) => (
                <Card key={index}>
                    <CardContent
                        className={`flex flex-col md:flex-row p-6 items-center space-y-4 md:space-y-0 gap-4 ${
                            index % 2 === 0
                                ? "lg:flex-row"
                                : "lg:flex-row-reverse"
                        }`}
                    >
                        <div className={"w-full border-2 rounded-3xl p-2"}>
                            <AspectRatio ratio={4 / 2}>
                                <Image
                                    src={content.imageSrc}
                                    alt={content.imageAlt}
                                    fill={true}
                                    className="rounded-2xl object-cover"
                                />
                            </AspectRatio>
                        </div>
                        <div className={"w-full flex flex-col"}>
                            <div className={"flex flex-row gap-2 items-center"}>
                                <Label className="text-base text-left font-semibold">
                                    {content.heading}
                                </Label>
                                {content.emoji}
                            </div>
                            <Label className="text-sm md:text-left text-gray-700">
                                {content.description}
                            </Label>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default Page
