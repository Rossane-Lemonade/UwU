import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Learn() {
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
          <div className="text-6xl mb-6">📚</div>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Learn More
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the science and art behind kawaii culture
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* What is UwU */}
          <Card className="p-8 border-2 border-pink-200/50">
            <div className="flex items-start gap-6">
              <div className="text-4xl">🤔</div>
              <div>
                <h2 className="text-3xl font-bold mb-4">What is UwU?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  UwU is an emoticon depicting a cute face. It's used to express
                  various warm, happy, or affectionate feelings. The "u"
                  characters represent closed eyes, while the "w" represents a
                  cute animal-like mouth.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Originally popular in online gaming and anime communities, UwU
                  has become a symbol of kawaii (cute) culture worldwide.
                </p>
              </div>
            </div>
          </Card>

          {/* The Science of Cute */}
          <Card className="p-8 border-2 border-purple-200/50">
            <div className="flex items-start gap-6">
              <div className="text-4xl">🧠</div>
              <div>
                <h2 className="text-3xl font-bold mb-4">The Science of Cute</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Research shows that exposure to cute things triggers the
                  release of dopamine and oxytocin, making us feel happier and
                  more relaxed. This is known as the "cuteness effect."
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Kawaii culture leverages this psychological response to create
                  environments that promote wellbeing and positive emotions.
                </p>
              </div>
            </div>
          </Card>

          {/* Design Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-2 border-pink-200/50 hover:border-pink-300/70 transition-all duration-300">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-pink-500" />
              <h3 className="text-xl font-bold mb-3">Soft Colors</h3>
              <p className="text-muted-foreground">
                Pastel palettes create a gentle, soothing visual experience
              </p>
            </Card>

            <Card className="p-6 text-center border-2 border-purple-200/50 hover:border-purple-300/70 transition-all duration-300">
              <Lightbulb className="h-12 w-12 mx-auto mb-4 text-purple-500" />
              <h3 className="text-xl font-bold mb-3">Round Shapes</h3>
              <p className="text-muted-foreground">
                Curved elements feel more friendly and approachable
              </p>
            </Card>

            <Card className="p-6 text-center border-2 border-blue-200/50 hover:border-blue-300/70 transition-all duration-300">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-3">Playful Typography</h3>
              <p className="text-muted-foreground">
                Fun fonts add personality and whimsy to designs
              </p>
            </Card>
          </div>

          {/* Fun Facts */}
          <Card className="p-8 border-2 border-blue-200/50">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Fun Facts About Kawaii
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">
                  1
                </Badge>
                <p className="text-muted-foreground">
                  The word "kawaii" originally meant "pitiable" in classical
                  Japanese
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">
                  2
                </Badge>
                <p className="text-muted-foreground">
                  Hello Kitty has no mouth because she "speaks from the heart"
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">
                  3
                </Badge>
                <p className="text-muted-foreground">
                  Pink was considered a masculine color until the 1940s
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">
                  4
                </Badge>
                <p className="text-muted-foreground">
                  The UwU emoticon first appeared in the early 2000s
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ready to embrace the UwU lifestyle?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/explore">
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                Explore Gallery
              </Button>
            </Link>
            <Link to="/join">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Join Community
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
