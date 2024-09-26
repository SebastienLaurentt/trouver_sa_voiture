import AccountHeader from "./account/AccountHeader";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[2000px] flex-col">
      <div className="flex flex-1 gap-x-8 px-8 xl:my-10 2xl:my-20">
        <AccountHeader />
        <div className="flex flex-1 flex-col rounded-lg border border-white  px-8 py-10">
          {children}
        </div>
      </div>
    </div>
  );
}
