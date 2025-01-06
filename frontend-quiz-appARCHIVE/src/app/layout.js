
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="backgroundImg flex justify-center items-center h-screen bg-dark-navy text-white">
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
