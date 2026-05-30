import { useState } from "react";
import Layout from "@/components/Layout";
import { FolderOpen, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const folder = "/gallery/RAKARAKA-Zambia-Office-Launch/";

const images = [
  "_DSC1560.jpg",
  "_DSC1528.jpg",
  "_DSC1529.jpg",
  "_DSC1545.jpg",
  "_DSC1549.jpg",
  "_DSC1551.jpg",
  "_DSC1552.jpg",
  "_DSC1553-Edit.jpg",
  "_DSC1557.jpg",
  "_DSC1559.jpg",
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
  const [openFolder, setOpenFolder] = useState(false);

  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Gallery
          </h1>
          <p className="text-lg text-primary-foreground/90">
            View RAKARAKA events and company moments.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {!openFolder ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <button
                onClick={() => setOpenFolder(true)}
                className="w-full group overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-lg transition-all text-left"
              >
                <img
                  src={`${folder}_DSC1560.jpg`}
                  alt="RAKARAKA Zambia Office Launch"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FolderOpen className="h-7 w-7 text-primary" />
                    <h2 className="font-heading text-xl font-bold text-foreground">
                      RAKARAKA Zambia Office Launch
                    </h2>
                  </div>

                  <p className="text-muted-foreground text-sm">
                    {images.length} photos
                  </p>
                </div>
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                    RAKARAKA Zambia Office Launch
                  </h2>
                  <p className="text-muted-foreground">
                    Click any photo to open it in full size.
                  </p>
                </div>

                <Button
                  variant="outline"
                  onClick={() => setOpenFolder(false)}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
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
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
