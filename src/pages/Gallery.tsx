import Layout from "@/components/Layout";

const images = [
  "_DSC1528.jpg",
  "_DSC1545.jpg",
  "_DSC1551.jpg",
  "_DSC1553-Edit.jpg",
  "_DSC1557.jpg",
  "_DSC1559.jpg",
  "_DSC1560.jpg",
  "_DSC1565.jpg",
  "_DSC1569.jpg",
  "_DSC1575.jpg",
  "_DSC1580.jpg",
  "_DSC1595.jpg",
  "_DSC1614.jpg",
  "_DSC1627-2.jpg",
  "_DSC1712.jpg",
];

const Gallery = () => {
  const folder = "/gallery/RAKARAKA-Zambia-Office-Launch/";

  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Gallery
            </h1>
            <p className="text-lg text-primary-foreground/90">
              RAKARAKA Zambia Office Launch
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              RAKARAKA Zambia Office Launch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              View moments from the RAKARAKA Zambia Office Launch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
              <a
                key={image}
                href={`${folder}${image}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-lg border border-border shadow-sm bg-card"
              >
                <img
                  src={`${folder}${image}`}
                  alt="RAKARAKA Zambia Office Launch"
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
