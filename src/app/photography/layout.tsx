
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery - Chethan',
  description: 'A collection of photographs by Chethan, capturing moments through the lens.',
};

export default function PhotographyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This layout is nested within the root layout. Returning only children
  // resolves the hydration error from nested <html> tags.
  // The theme for this page is now applied in the page component itself.
  return <>{children}</>;
}
