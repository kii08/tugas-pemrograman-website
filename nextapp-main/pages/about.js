import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

export default function About() {
    return (
        <div>
            <Layout title="About Brand Name">
                <Navbar/>
                <section id="about" className="pt-5 text-white">
                    <div className="container">
                        <h1>About</h1>
                    </div> 
                </section>
            </Layout>
        </div>
    )
}
