
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Students(){
  const data = [
    {id:1,name:'Asha',score:64,risk:true},
    {id:2,name:'Ravi',score:78,risk:false},
    {id:3,name:'Maya',score:55,risk:true},
  ];
  return (
    <div>
      <Header />
      <main className="container">
        <h1>Students</h1>
        <div style={{display:'grid',gap:10}}>
          {data.map(s=>(
            <div key={s.id} className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div><strong>{s.name}</strong><div className="small">Score: {s.score}</div></div>
              <div>{s.risk ? <span style={{color:'var(--accent)'}}>At risk</span> : <span className="small">OK</span>}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
