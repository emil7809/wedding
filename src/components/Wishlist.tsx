import Thermometer from 'react-thermometer-component'

export default function Wishlist() {
    return (
        <>
            <section id="Wishlist">
                <h2>Ønskeliste</h2>
                <p>Det eneste vi ønsker er at kunne tage på honeymoon.
                    Basically, vi vil hellere have dine penge end en personlig gave.
                    Så får du en selfie med det, din gave blev brugt på.
                </p>
                <div id='themo'>
                    <Thermometer
                        theme="dark"
                        value="1"
                        max="100.000"
                        steps="3"
                        format="Kr,-"
                        size="large"
                        height="300"
                    />
                </div>
            </section>
        </>
    )
}