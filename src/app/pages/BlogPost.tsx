import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";

export function BlogPost() {
  const { slug } = useParams();

  return (
    <div className="bg-background min-h-screen">
      <section className="py-24 bg-gradient-to-b from-black to-[#0A1628]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <div className="mb-6">
              <Badge variant="primary">Development</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-['Orbitron'] text-foreground mb-6">
              {slug?.replace(/-/g, " ")}
            </h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>May 1, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>

            <div
              className="h-96 rounded-xl bg-cover bg-center mb-12"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop)",
              }}
            />

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-muted-foreground text-xl leading-relaxed mb-6">
                This is a sample blog post. In a real application, you would fetch the content
                based on the slug parameter and render it here with rich formatting.
              </p>

              <h2 className="text-foreground text-2xl font-['Orbitron'] mt-12 mb-4">
                Section Heading
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
              </p>

              <h3 className="text-foreground text-xl font-['Orbitron'] mt-8 mb-4">
                Subsection
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
