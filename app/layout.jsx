import "./globals.css";

export const metadata = {
  title: "Luxury Perfumes - Landing Page",
  description:
    "Experience the essence of luxury with our exclusive collection of perfumes. Discover timeless elegance and irresistible scents crafted for the discerning connoisseur. Shop now and indulge in the art of fragrance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
