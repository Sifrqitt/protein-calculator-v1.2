import "../styles.css"; // ✅ Import Tailwind styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
