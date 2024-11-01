import "./globals.css";
import {Toaster} from "@components/ui/toaster";
import {Header} from "@components/Header";
import {ThemeProvider} from "@components/ui/theme-provider"
import {Footer} from "@components/Footer";


export const metadata = {
	title: "gitDiffSummarize",
	description: "Generated a diff summary",
};

export default function RootLayout({children}) {
	return (
		<html lang="fr" suppressHydrationWarning>
		<body className="antialiased flex flex-col min-h-screen">
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem
				disableTransitionOnChange
			>
				<Header/>
				<main className="flex-grow w-screen p-10 pb-20">
					{children}
				</main>
				<Footer/>
				<Toaster/>
			</ThemeProvider>
		</body>
		</html>
	);
}
