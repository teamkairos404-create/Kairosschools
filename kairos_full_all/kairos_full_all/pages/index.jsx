
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home(){
  return (
    <div>
      <Header />
      <main className="container">
        <section style={{display:'flex',gap:24,alignItems:'center',marginTop:20,flexWrap:'wrap'}}>
          <div style={{flex:1,minWidth:280}}>
            <h1 style={{fontSize:36,color:'#fff',marginBottom:12}}>Kairos Schools — Make every moment of learning count</h1>
            <p style={{color:'var(--muted)',fontSize:16}}>Competency-based assessments that reveal misconceptions, teacher pedagogy to remediate gaps, and classroom-ready e-content for K–12 schools.</p>
            <div style={{marginTop:20}}><a href="/dashboard" className="btn-primary">Go to Dashboard</a></div>
          </div>
          <div style={{width:380}}>
            <div className="card">
              <h3 style={{margin:0,color:'#fff'}}>Three pillars</h3>
              <ol style={{marginTop:10,color:'var(--muted)'}}>
                <li>Competency assessments</li>
                <li>Pedagogy & teacher training</li>
                <li>E-content library</li>
              </ol>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
