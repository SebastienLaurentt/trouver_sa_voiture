import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-col justify-center">{children} </div>
      <Footer />
    </div>
  );
}
