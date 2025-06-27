# 🍳 AI Meal Planner

An intelligent meal planning assistant powered by Google's Gemini AI that creates personalized meal plans with detailed recipes, ingredients, and cooking instructions.

![Image](https://github.com/user-attachments/assets/a0113f0f-3e5a-4f99-8cfd-e16e5563c959)

## ✨ Features

- **🚀 Quick Meal Plans**: Generate instant meal plans using a simple form
- **💬 Interactive Chat**: Have detailed conversations with your AI chef assistant
- **🥗 Dietary Awareness**: Handles allergies, restrictions, and special diets
- **📝 Complete Instructions**: Get ingredients lists and step-by-step cooking guides
- **📱 Responsive Design**: Works perfectly on desktop and mobile devices
- **⚡ Real-time Streaming**: Get responses as they're generated

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **AI Integration**: AI SDK with Google Gemini 2.0 Flash
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Google AI API key ([Get one here](https://makersuite.google.com/app/apikey))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AdwinTS/ai-meal-planner.git
   cd ai-meal-planner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Quick Meal Plan (Form Method)
1. Fill out the form on the left side:
   - Number of recipes needed
   - Recipe preferences (e.g., "Italian pasta, grilled chicken")
   - Allergies or dietary restrictions
2. Click "Generate Meal Plan"
3. Your personalized meal plan appears in the chat area

### Interactive Chat
1. Type directly in the chat interface
2. Ask questions like:
   - "Create a 7-day vegetarian meal plan"
   - "I need quick dinner recipes under 30 minutes"
   - "Suggest keto-friendly breakfast ideas"
3. Continue the conversation to refine your meal plans

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add your `GOOGLE_GENERATIVE_AI_API_KEY` in Environment Variables
   - Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai-meal-planner)

### Other Deployment Options
- **Netlify**: Works with minor configuration
- **Railway**: Perfect for full-stack apps
- **Docker**: Containerized deployment ready

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_GENERATIVE_AI_API_KEY` | Your Google AI API key | Yes |

### Customization

- **AI Model**: Change the model in `app/api/chat/route.ts`
- **Styling**: Modify Tailwind classes or add custom CSS
- **System Prompt**: Update the AI instructions in the API route

## 📁 Project Structure

```
ai-meal-planner/
├── app/
│   ├── api/chat/route.ts      # AI API endpoint
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main application
├── components/ui/             # shadcn/ui components
├── lib/utils.ts               # Utility functions
├── .env.local                 # Environment variables
└── README.md                  # This file
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

.

## 🙏 Acknowledgments

- [Vercel AI SDK](https://sdk.vercel.ai/) for the AI integration
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Google AI](https://ai.google.dev/) for the Gemini API
- [Lucide](https://lucide.dev/) for the icons



