import PortfolioPage from "@/components/template/PortfolioPage";
import { getPortfolioData } from "@/lib/data";

export default function FullstackPortfolio() {
    const data = getPortfolioData('fullstack');

    return <PortfolioPage data={data} mode="fullstack" />;
}