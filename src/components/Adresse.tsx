
export default function Adresse() {
    return (
        <>
            <section className="hidden" id="adresse">
                <div>
                    <h2>Adresse</h2>
                    <h4>Vikingepladsen</h4>
                    <h4>   Kalvøvej 26</h4>
                    <h4>   3600 Frederikssund</h4>
                </div>
                <img src="../../public/img/langhus.jpg" alt="langhus.jpg" />
                <div>
                    <h3>Kort</h3>
                    <img src="../../public/img/map.jpg" alt="kort" />
                    <p className="many_words">250 meter fra Langhuset ligger en stor
                        parkeringsplads, der er gratis at benytte.</p>
                </div>
                <div>
                    <h3>Praktisk info</h3>
                    <ul>
                        <li>Det kan blive køligt først på aftenen</li>
                        <li>Der er 200 meter ned til toiletbygning, så praktiske sko
                            anbefales(Lokation bliver tydeligt skiltet)</li>
                    </ul>
                </div>
                <div>
                    <h3>Lidt om stedet</h3>
                    <p className="many_words">Frederikssund Vikingeboplads er et frilandsmuseum, hvor fem grubehuse og et
                        langhus samt en
                        plankevej
                        og en anløbsbro er rekonstrueret. Grubehusene er små, halvt nedgravede. De har i vikingetiden været
                        brugt som værksteder og i nogle tilfælde også som midlertidig bolig.
                        Her kan man gå på opdagelse
                        blandt de mange hytter, som Frederikssunds vikinger bruger om sommeren.
                    </p>
                </div>

                <div className="mapouter">
                    {/*  <div className="gmap_canvas"><iframe className="gmap_iframe" frameborder="0" scrolling="no" marginheight="0"
                                    marginwidth="0"
                                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Kalvøvej 26&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                </div> */}

                </div>
            </section>
        </>
    )
}