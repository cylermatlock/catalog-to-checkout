import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Header />
    <div className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold">About <span className="text-primary">Us</span></h1>
      </div>
    </div>
    <div className="container mx-auto px-4 py-12 flex-1 max-w-3xl">
      <p className="text-muted-foreground leading-relaxed mb-6">
        GM Therapy Solutions is a family owned and operated company founded by two college buddies that joined forces after working together at a physical therapy equipment dealership. After putting their education to the test and nearly a decade of learning the PT industry, Cyler and Justin decided to build a business of their own where the customer experience comes first.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8">
        At GMTS, we pride ourselves on making the equipment purchasing process simple, fast, and stress free — all without our clients doing any of the heavy lifting. Technology in the physical therapy world is always changing. Having a reliable equipment partner shouldn't.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground text-lg mb-2">Justin Guthrie</h3>
          <p className="text-primary text-sm font-medium mb-2">Co-Owner — "The G"</p>
          <p className="text-sm text-muted-foreground">The big picture guy with an even bigger personality. Justin studied Kinesiology and Exercise Science at Tarleton State and Midwestern State University.</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground text-lg mb-2">Cyler Matlock</h3>
          <p className="text-primary text-sm font-medium mb-2">Co-Owner — "The M"</p>
          <p className="text-sm text-muted-foreground">The savvy specialist that is the fuel on the fire. Cyler has a master's degree in Exercise Physiology from Texas Tech University.</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;
