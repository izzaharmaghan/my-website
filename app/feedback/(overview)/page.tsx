'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    comments: '',
  })

  const handleChange = (name: string, value: string) => {
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your server
  }

  return (
    <Card className={"mx-2 my-10"}>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">LETS MAKE A DIFFERENCE TOGETHER</CardTitle>
        <CardDescription>WE WOULD LOVE TO HEAR FROM YOU. LET US KNOW WHAT YOU THINK</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
              placeholder='Jane Smith'
              className='text-sm'
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
              placeholder='jane.smith@example.com'
              className='text-sm'
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rating">Rating</Label>
            <Select onValueChange={(value) => handleChange('rating', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 - Excellent</SelectItem>
                <SelectItem value="4">4 - Very Good</SelectItem>
                <SelectItem value="3">3 - Good</SelectItem>
                <SelectItem value="2">2 - Fair</SelectItem>
                <SelectItem value="1">1 - Poor</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="comments">Comments</Label>
            <Textarea
              id="comments"
              value={formData.comments}
              onChange={(e) => handleChange('comments', e.target.value)}
              required
              placeholder='I would love to adopt a dog" or "Looking for volunteer opportunities.'
              className='text-sm'
            />
          </div>
          <Button type="submit" className="w-full">SUBMIT FEEDBACK</Button>
        </form>
      </CardContent>
    </Card>
  )
}