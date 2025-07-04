import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-pink-300/30 text-6xl animate-bounce">
          ✨
        </div>
        <div className="absolute top-40 right-20 text-purple-300/30 text-4xl animate-pulse">
          💖
        </div>
        <div className="absolute bottom-40 left-20 text-blue-300/30 text-5xl animate-bounce delay-1000">
          🌸
        </div>
        <div className="absolute bottom-20 right-10 text-pink-300/30 text-4xl animate-pulse delay-500">
          ⭐
        </div>

        {/* Rolla's cute signature */}
        <div className="absolute top-32 right-4 md:right-10 flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border-2 border-pink-200/50 animate-bounce delay-700">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F1b77b1e70c5c43b785bba93851bfb410%2F4ac45ea9b7ab43a9aa5c24e6ab374243?format=webp&width=800"
            alt="Cute kawaii emoji"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <div className="text-sm md:text-base">
            <div className="font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Rolla Assad
            </div>
            <div className="text-xs text-muted-foreground">Kawaii Creator</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          {/* Large UwU emoji */}
          <div className="mb-8">
            <div className="inline-block p-8 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 shadow-lg">
              <span className="text-9xl block leading-none">UwU</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6 leading-tight">
            UwU Zone
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Welcome to the cutest corner of the internet! A place where kawaii
            meets modern design ✨
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/explore">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Heart className="mr-2 h-5 w-5" />
                Explore Cuteness
              </Button>
            </Link>
            <Link to="/learn">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold border-2 hover:bg-primary/10 transition-all duration-300"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center border-2 border-pink-200/50 hover:border-pink-300/70 transition-all duration-300 hover:shadow-lg">
              <div className="text-4xl mb-3">🎀</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                100% Kawaii
              </h3>
              <p className="text-muted-foreground">
                Certified cute by internet standards
              </p>
            </Card>

            <Card className="p-6 text-center border-2 border-purple-200/50 hover:border-purple-300/70 transition-all duration-300 hover:shadow-lg">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Sparkly Design
              </h3>
              <p className="text-muted-foreground">
                Modern aesthetics with magical touches
              </p>
            </Card>

            <Card className="p-6 text-center border-2 border-blue-200/50 hover:border-blue-300/70 transition-all duration-300 hover:shadow-lg">
              <div className="text-4xl mb-3">💝</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Made with Love
              </h3>
              <p className="text-muted-foreground">
                Crafted with care and endless UwUs
              </p>
            </Card>
          </div>
        </div>

        {/* Secondary Section */}
        <div className="text-center py-20">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-base">
              <Star className="mr-2 h-4 w-4" />
              Premium Cuteness Experience
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Where Every Pixel is Perfectly Kawaii
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Experience the internet like never before with our carefully
              crafted UwU aesthetic. Every element is designed to bring joy,
              comfort, and that special warm feeling you get when something is
              just too cute to handle.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="outline" className="px-3 py-1">
                🌸 Pastel Vibes
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                ✨ Smooth Animations
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                💖 Responsive Design
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                🎀 Modern Typography
              </Badge>
            </div>

            <Link to="/join">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Join the UwU Revolution
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="text-2xl mb-4">UwU</div>
          <p className="text-muted-foreground">
            Made with 💖 and endless cups of bubble tea by{" "}
            <span className="font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Rolla Assad
            </span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 UwU Zone. Spreading cuteness across the internet.
          </p>
        </div>
      </footer>
    </div>
  );
}
