import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Heart, Mail, User, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Join() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Welcome to the UwU community! 🎉");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
          <div className="text-6xl mb-6">💖</div>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Join the UwU Revolution
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Become part of our kawaii community and spread cuteness everywhere!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-6">Why Join Us?</h2>

              <Card className="p-6 border-2 border-pink-200/50 hover:border-pink-300/70 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🌟</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Exclusive Content
                    </h3>
                    <p className="text-muted-foreground">
                      Access to premium kawaii designs, wallpapers, and digital
                      stickers
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-purple-200/50 hover:border-purple-300/70 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">👥</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Community Events</h3>
                    <p className="text-muted-foreground">
                      Join virtual kawaii parties, design contests, and cute
                      challenges
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-blue-200/50 hover:border-blue-300/70 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🎁</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Monthly Surprises
                    </h3>
                    <p className="text-muted-foreground">
                      Receive adorable digital goodies and kawaii collectibles
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-pink-200/50 hover:border-pink-300/70 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">💌</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">UwU Newsletter</h3>
                    <p className="text-muted-foreground">
                      Weekly dose of cuteness delivered straight to your inbox
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sign up form */}
            <Card className="p-8 border-2 border-gradient-to-r from-pink-200 to-purple-200">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="text-2xl font-bold">Join Our Community</h3>
                <p className="text-muted-foreground">
                  Start your kawaii journey today!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Your Kawaii Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your cute nickname"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-pink-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-purple-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    What makes you UwU? (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what brings you joy and makes you feel kawaii..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="border-2 focus:border-blue-300"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Join the UwU Family
                </Button>
              </form>

              <div className="text-center mt-6 text-sm text-muted-foreground">
                By joining, you agree to spread cuteness and positivity! 🌈
              </div>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Join Our Growing Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-black text-pink-500 mb-2">10k+</div>
              <div className="text-muted-foreground">Happy Members</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-500 mb-2">
                50k+
              </div>
              <div className="text-muted-foreground">UwUs Shared</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-500 mb-2">∞</div>
              <div className="text-muted-foreground">Cuteness Level</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
