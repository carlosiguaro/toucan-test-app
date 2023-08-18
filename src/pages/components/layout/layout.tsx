import Footer from "../footer/footer";
import Header from "../header/header";

export default function Layout({children, section}: {
        children: React.ReactNode,
        section: string
    }){
    const imgClass = section.toLocaleLowerCase().split(' ').join('-');
    const titleSection = section.replace(/\b\w/g, char => char.toLocaleUpperCase());

    return (
        <main id="layout">
            <div>
                <div>
                    <Header/>
                    <section>
                        <div className={imgClass}>
                            <h1>{titleSection}</h1>
                        </div>
                        {children}
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    )
}