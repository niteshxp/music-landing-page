export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="border-2">Inner layout</h1>
      {children}
    </>
  );
}
