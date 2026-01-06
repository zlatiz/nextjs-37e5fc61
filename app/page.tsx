import Image from "next/image";
import Button from "../components/ui/button";
import Card from "../components/ui/card";

interface ImageItem {
  url: string;
  alt: string;
  width: number;
  height: number;
}

const IMAGES: ImageItem[] = [
  { url: "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png", alt: "Garber Bros logo", width: 300, height: 80 },
  { url: "https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg", alt: "Garber Bros vessels", width: 1200, height: 700 },
  { url: "https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg", alt: "Employment application", width: 800, height: 500 },
  { url: "https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg", alt: "Contact Garber Bros", width: 800, height: 500 },
  { url: "https://garberbrosinc.com/;%20%20%20%20%20%20%20%20//if%20we%20have%20the%20properties%20from%20the%20settings%20we%20pass%20them%20in%20and%20set%20up%20the%20resizer%20%20%20%20%20%20%20%20%20%20%20%20%20content%20=%20content%20+", alt: "Decorative resource 1", width: 600, height: 400 },
  { url: "https://garberbrosinc.com/;%20%20%20%20%20%20%20%20//if%20we%20have%20the%20properties%20from%20the%20settings%20we%20pass%20them%20in%20and%20set%20up%20the%20resizer%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20content%20=%20content%20+", alt: "Decorative resource 2", width: 600, height: 400 },
  { url: "https://garberbrosinc.com/%27/Images/Transparent.html", alt: "Transparent slide resource", width: 1000, height: 600 }
];

export default function Page() {
  const images = Array.isArray(IMAGES) ? IMAGES : [];
  const firstSix = images.slice(0, 6);
  const remaining = images.slice(6);

  const safe = (u: string) => encodeURI(u);

  return (
    <div className="container">
      <section className="hero" aria-labelledby="hero-heading">
        <div>
          <h1 id="hero-heading">Garber Bros, Inc.</h1>
          <p>For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry. We pride ourselves on supplying the absolute best marine services to all types of industries.</p>
          <div style={{ marginTop: '1rem' }}>
            <a href="/vessels" className="yellow-button">View Our Fleet of Vessels</a>
          </div>
        </div>
        <div className="card">
          {images[1] && (
            <Image src={safe(images[1].url)} alt={images[1].alt} width={images[1].width} height={images[1].height} style={{ borderRadius: 8 }} unoptimized />
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
            <a href="javascript:previousSlide6347994()">Prev</a>
            <a href="javascript:nextSlide6347994()">Next</a>
          </div>
        </div>
      </section>

      <section aria-labelledby="tiles-heading">
        <h2 id="tiles-heading">Highlights</h2>
        <div className="tile-grid">
          <Card>
            <h3>Our Vessels</h3>
            <a href="/vessels"><Image src={safe(images[1].url)} alt={images[1].alt} width={400} height={250} unoptimized /></a>
            <p>Garber Bros Inc has an elite fleet of vessels of use in all types of projects.</p>
            <a href="/vessels">View Our Vessels »</a>
          </Card>

          <Card>
            <h3>Employment</h3>
            <a href="/websites/garberbrosinc/images/application.pdf"><Image src={safe(images[2].url)} alt={images[2].alt} width={400} height={250} unoptimized /></a>
            <p>Interested in working at Garber Bros? Download our employment application.</p>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <a href="/websites/garberbrosinc/images/application.pdf">View Our Employment Application »</a>
              <a href="http://www.goodhiring.com/garberbrosinc/apply/open">Apply (GoodHiring)</a>
            </div>
          </Card>

          <Card>
            <h3>Contact Us</h3>
            <a href="/contact"><Image src={safe(images[3].url)} alt={images[3].alt} width={400} height={250} unoptimized /></a>
            <p>To contact Garber Bros Inc regarding vessel availability, click here.</p>
            <a href="/contact">Contact Garber Bros Inc »</a>
          </Card>
        </div>
      </section>

      <section aria-labelledby="thumbnails-heading">
        <h2 id="thumbnails-heading">Gallery</h2>
        <div className="thumbnail-grid">
          {Array.isArray(firstSix) ? (Array.isArray(firstSix) ? firstSix : []).map((img, idx) => (
            <div key={idx} className="card">
              <Image src={safe(img.url)} alt={img.alt} width={img.width} height={img.height} unoptimized />
            </div>
          )) : null}
        </div>

        {remaining.length > 0 && (
          <div className="gallery">
            <h3>More Images</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {(Array.isArray(remaining) ? remaining : []).map((img, i) => (
                <div key={i} className="card">
                  <Image src={safe(img.url)} alt={img.alt} width={img.width} height={img.height} unoptimized />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <section aria-labelledby="more-links-heading" style={{ marginTop: 24 }}>
        <h2 id="more-links-heading">Quick Links</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/lock-status">Lock Status</a>
          <a href="/vessels">Vessels</a>
          <a href="/barges">Barges</a>
          <a href="/websites/garberbrosinc/images/application.pdf">Employment</a>
          <a href="/contact">Contact Us</a>
          <a href="contact.aspx">contact.aspx</a>
          <a href="#">#</a>
          <a href="/transparency-in-coverage">Transparency in Coverage</a>
          <a href="http://www.goodhiring.com/garberbrosinc/apply/open">GoodHiring Application</a>
        </div>
      </section>

      <div className="back-to-top">
        <a href="#">Back to top</a>
      </div>
    </div>
  );
}
