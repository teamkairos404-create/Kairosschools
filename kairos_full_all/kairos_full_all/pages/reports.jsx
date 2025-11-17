
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Reports({reports=[]}){
  return (
    <div>
      <Header />
      <main className="container">
        <h1>Reports</h1>
        <div style={{display:'grid',gap:12}}>
          <div className="card"><strong>5A - Fractions</strong><div className="small">Created: 2025-10-12</div></div>
          <div className="card"><strong>6B - Geometry</strong><div className="small">Created: 2025-09-27</div></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
