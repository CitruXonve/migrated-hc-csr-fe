import Header from "@/components/Header"
import { useParams } from "@modern-js/runtime/router";

const Index = () => {
    const { lang = 'en' } = useParams();

    return (
        <div id="main">
            <Header lang={lang} />
        </div>
    )
}

export default Index;
