import PortfolioPage from "@/components/template/PortfolioPage";
import { getPortfolioData } from "@/lib/data";

export default function AIPortfolio() {
    const data = getPortfolioData('ai');

    return <PortfolioPage data={data} mode="ai" />;
}