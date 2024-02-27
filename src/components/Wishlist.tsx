import Thermometer from 'react-thermometer-component'

export default function Wishlist() {
    return (
        <>
            <section id="Wishlist">
                <h2>Ønskeliste</h2>
                <p>Det vi ønsker mest er at tage på honeymoon.</p>
                <img src="https://i.imgflip.com/8h8zi7.jpg" alt="" />

                <h3>Penge til Honeymoon</h3>
                <div id='themo'>
                    <Thermometer
                        theme="dark"
                        value="0"
                        max="20"
                        steps="2"
                        format="kr,-"
                        size="large"
                        height="300"
                    />

                </div>
                <h2>Andre Ønsker</h2>
                <ul>
                    <li>Lille kaffemaskine</li>
                    <li>Sengetøj</li>
                    <li>Pander</li>
                    <li>Woks</li>
                    <li>Tablet</li>
                </ul>
            </section>
        </>
    )
}