import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🎀</div>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Explore Cuteness
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the most adorable corners of our kawaii universe
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-pink-200/50 hover:border-pink-300/70 group">
            <div className="text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🌸
              </div>
              <h3 className="text-xl font-bold mb-3">Cherry Blossoms</h3>
              <p className="text-muted-foreground mb-4">
                Delicate pink petals that dance in the spring breeze
              </p>
              <Badge variant="secondary">
                <Heart className="mr-1 h-3 w-3" />
                Super Cute
              </Badge>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-purple-200/50 hover:border-purple-300/70 group">
            <div className="text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🦋
              </div>
              <h3 className="text-xl font-bold mb-3">Kawaii Butterflies</h3>
              <p className="text-muted-foreground mb-4">
                Graceful creatures with rainbow wings
              </p>
              <Badge variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Magical
              </Badge>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-blue-200/50 hover:border-blue-300/70 group">
            <div className="text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🌟
              </div>
              <h3 className="text-xl font-bold mb-3">Starlight Dreams</h3>
              <p className="text-muted-foreground mb-4">
                Twinkling stars that make wishes come true
              </p>
              <Badge variant="secondary">
                <Star className="mr-1 h-3 w-3" />
                Dreamy
              </Badge>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-pink-200/50 hover:border-pink-300/70 group">
            <div className="text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🎂
              </div>
              <h3 className="text-xl font-bold mb-3">Sweet Treats</h3>
              <p className="text-muted-foreground mb-4">
                Adorable cakes and pastries that melt your heart
              </p>
              <Badge variant="secondary">
                <Heart className="mr-1 h-3 w-3" />
                Delicious
              </Badge>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-purple-200/50 hover:border-purple-300/70 group">
            <div className="text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🌈
              </div>
              <h3 className="text-xl font-bold mb-3">Rainbow Magic</h3>
              <p className="text-muted-foreground mb-4">
                Colorful arcs that bridge dreams and reality
              </p>
              <Badge variant="secondary">
                <Sparkles className="mr-1 h-3 w-3" />
                Colorful
              </Badge>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-blue-200/50 hover:border-blue-300/70 group">
            <div className="text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                💝
              </div>
              <h3 className="text-xl font-bold mb-3">Love Letters</h3>
              <p className="text-muted-foreground mb-4">
                Heartfelt messages wrapped in kawaii packaging
              </p>
              <Badge variant="secondary">
                <Heart className="mr-1 h-3 w-3" />
                Romantic
              </Badge>
            </div>
          </Card>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Want to see more cuteness?
          </h2>
          <Link to="/join">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Join Our Community
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="text-2xl mb-4">UwU</div>
          <p className="text-muted-foreground">
            Made with 💖 by{" "}
            <span className="font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Rolla Assad
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
