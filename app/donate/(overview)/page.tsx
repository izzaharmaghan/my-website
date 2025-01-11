import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

const Page = () => {
    return (
        <Card className="max-w-xl mx-2 rounded-md my-10">
            <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">
                    WHY DONATE?
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-center text-sm">
                    Your contribution helps provide shelter, food, and medical
                    care for dogs in need. Every donation, big or small, makes a
                    tail-wagging difference!
                </p>
            </CardContent>
            <CardFooter className="justify-center">
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button>
                            <Paw className={"w-4 h-4"} /> DONATE
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle className={"font-medium"}>
                                Choose your donation amount
                            </AlertDialogTitle>
                            <RadioDemo />
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </CardFooter>
        </Card>
    )
}

const index = [
    { id: "1", label: "20K(PKR)/70(USD)" },
    { id: "2", label: "5K(PKR)/18(USD)" },
    { id: "3", label: "10K(PKR)/36(USD)" },
    { id: "4", label: "2K(PKR)/8(USD)" },
]

export default Page

const RadioDemo = () => {
    return (
        <RadioGroup
            className="gap-2"
            defaultValue="r1"
        >
            {index.map((item, index) => (
                <div key={index}>
                    {index === 0 ? (
                        <div>
                            <Label className={"text-muted-foreground"}>
                                One-time Donation
                            </Label>
                        </div>
                    ) : null}
                    <div
                        key={index}
                        className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring"
                    >
                        <RadioGroupItem
                            value={item.id}
                            id={`radio-09-r${item.id}`}
                            aria-describedby={`radio-09-r${item.id}-description`}
                            className="order-1 after:absolute after:inset-0"
                        />
                        <div className="flex grow items-start gap-3">
                            <div className="grid grow gap-2">
                                <Label htmlFor={`radio-09-r${item.id}`}>
                                    <>{item.label}</>
                                    <>
                                        {index === 0 && (
                                            <Label className="-mt-1 ml-2 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-300/15 px-1 py-0.5 text-[10px] font-medium uppercase text-emerald-600">
                                                RECOMMENDED
                                            </Label>
                                        )}
                                    </>
                                </Label>
                            </div>
                        </div>
                    </div>
                    {index === 1 ? (
                        <div>
                            <Label className={"text-muted-foreground"}>
                                Monthly
                            </Label>
                        </div>
                    ) : null}
                </div>
            ))}
        </RadioGroup>
    )
}

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { PawPrintIcon as Paw } from "lucide-react"