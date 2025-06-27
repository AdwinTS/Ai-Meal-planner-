"use client"

import type React from "react"

import { useChat } from "ai/react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ChefHat, MessageCircle, Utensils, AlertTriangle } from "lucide-react"

export default function MealPlanningChatbot() {
  const { messages, input, handleInputChange, handleSubmit, append, isLoading } = useChat()
  const [quickForm, setQuickForm] = useState({
    recipeCount: "",
    recipes: "",
    allergies: "",
  })

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!quickForm.recipeCount || !quickForm.recipes) return

    const prompt = `Generate a meal plan for ${quickForm.recipeCount} recipes based on the following recipes: ${quickForm.recipes}. ${
      quickForm.allergies ? `Consider the following allergies or issues: ${quickForm.allergies}.` : ""
    } Provide a detailed meal plan with ingredients and instructions.`

    await append({
      role: "user",
      content: prompt,
    })

    setQuickForm({ recipeCount: "", recipes: "", allergies: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChefHat className="h-8 w-8 text-orange-600" />
            <h1 className="text-3xl font-bold text-gray-900">AI Meal Planner</h1>
          </div>
          <p className="text-gray-600">Get personalized meal plans with ingredients and cooking instructions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5" />
                Quick Meal Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Number of Recipes</label>
                  <Input
                    type="number"
                    placeholder="e.g., 5"
                    value={quickForm.recipeCount}
                    onChange={(e) => setQuickForm((prev) => ({ ...prev, recipeCount: e.target.value }))}
                    min="1"
                    max="20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Recipe Preferences</label>
                  <Input
                    placeholder="e.g., Italian pasta, grilled chicken"
                    value={quickForm.recipes}
                    onChange={(e) => setQuickForm((prev) => ({ ...prev, recipes: e.target.value }))}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block flex items-center gap-1">
                    <AlertTriangle className="h-4 w-4" />
                    Allergies/Restrictions
                  </label>
                  <Input
                    placeholder="e.g., nuts, dairy, vegetarian"
                    value={quickForm.allergies}
                    onChange={(e) => setQuickForm((prev) => ({ ...prev, allergies: e.target.value }))}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  disabled={!quickForm.recipeCount || !quickForm.recipes || isLoading}
                >
                  {isLoading ? "Generating..." : "Generate Meal Plan"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Chat with AI Chef
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 overflow-y-auto mb-4 space-y-4 p-4 bg-gray-50 rounded-lg">
                {messages.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <ChefHat className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Start a conversation or use the quick form to generate a meal plan!</p>
                    <div className="flex flex-wrap gap-2 justify-center mt-4">
                      <Badge variant="secondary">Meal Planning</Badge>
                      <Badge variant="secondary">Recipe Ideas</Badge>
                      <Badge variant="secondary">Dietary Restrictions</Badge>
                    </div>
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.role === "user" ? "bg-orange-600 text-white" : "bg-white border shadow-sm"
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{message.content}</div>
                      </div>
                    </div>
                  ))
                )}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border shadow-sm p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="animate-spin h-4 w-4 border-2 border-orange-600 border-t-transparent rounded-full"></div>
                        <span className="text-gray-600">AI Chef is cooking up your meal plan...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Separator className="my-4" />

              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about meal planning, recipes, or dietary needs..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  Send
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Example Prompts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Meal Planning</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>{"• Create a 7-day vegetarian meal plan"}</li>
                  <li>{"• I need 3 quick dinner recipes under 30 minutes"}</li>
                  <li>{"• Plan meals for a family of 4 with a $50 budget"}</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Dietary Restrictions</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>{"• Gluten-free breakfast ideas for the week"}</li>
                  <li>{"• Keto-friendly lunch recipes with chicken"}</li>
                  <li>{"• Dairy-free desserts that kids will love"}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
