
import Link from 'next/link';

export default function Page(){
  return (
    <div className="container" style={{paddingTop:28}}>
      <section style={{display:'flex',gap:24,alignItems:'center',marginTop:4,flexWrap:'wrap'}}>
        <div style={{flex:1,minWidth:280}}>
          <h1 style={{fontSize:36,color:'#fff',marginBottom:12}}>Kairos Schools — Make every moment of learning count</h1>
          <p style={{color:'var(--muted)',fontSize:16}}>Competency-based assessments that reveal misconceptions, teacher pedagogy to remediate gaps, and classroom-ready e-content for K-12 schools.</p>
          <div style={{marginTop:20}}><Link href='/dashboard'><a className='btn-primary'>Go to Dashboard</a></Link></div>
        </div>
        <div style={{width:380}}>
          <div className='card'>
            <h3 style={{margin:0,color:'#fff'}}>Three pillars</h3>
            <ol style={{marginTop:10,color:'var(--muted)'}}>
              <li>Competency assessments</li>
              <li>Pedagogy & teacher training</li>
              <li>E-content library</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}
