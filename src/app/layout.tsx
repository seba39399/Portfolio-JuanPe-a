import "./globals.css";

export const metadata = {
  title: "Portafolio | Data & AI Engineer",
  description:
    "Interactive portfolio of Data Engineering, MLOps, and AI projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
