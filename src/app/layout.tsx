import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import "./scss/zeroing.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	manifest: "/manifest.json",
	title: "MoneyMind",
	description:
		"MoneyMind - ваш особистий фінансовий помічник, що допомагає керувати вашими фінансами з легкістю та ефективністю. З MoneyMind ви можете легко відстежувати свої доходи та витрати, планувати бюджет, встановлювати фінансові цілі та відслідковувати їх досягнення. Наше інтуїтивно зрозуміле інтерфейс дозволить вам отримати повний контроль над вашими фінансами, незалежно від того, де ви знаходитесь. З MoneyMind ви можете зосередитися на досягненні своїх фінансових мрій, а не на стресі від управління грошима. ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const title = {
		title: "MoneyMind",
		description:
			"MoneyMind - ваш особистий фінансовий помічник, що допомагає керувати вашими фінансами з легкістю та ефективністю. З MoneyMind ви можете легко відстежувати свої доходи та витрати, планувати бюджет, встановлювати фінансові цілі та відслідковувати їх досягнення. Наше інтуїтивно зрозуміле інтерфейс дозволить вам отримати повний контроль над вашими фінансами, незалежно від того, де ви знаходитесь. З MoneyMind ви можете зосередитися на досягненні своїх фінансових мрій, а не на стресі від управління грошима. ",
	};

	return (
		<html lang="uk">
			<body className={font.className}>
				<Header />
				<main>{children}</main>
				<Footer title={title} />
			</body>
		</html>
	);
}
