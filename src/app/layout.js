import "./globals.css";

export const metadata = {
  title: "CYBER-SYNC // Matrix",
  description: "Terminal-based productivity timer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-emerald-400 font-mono antialiased">
        {children}
      </body>
    </html>
  );
}