
import KPI from '../../components/KPI'
import Link from 'next/link'

export default function DashboardPage(){
  return (
    <div className="container" style={{paddingTop:24}}>
      <section className="kpi-row">
        <KPI title="Class Avg" value="72%" meta="since last test" />
        <KPI title="At-risk students" value="8" meta="needs remediation" />
        <KPI title="New reports" value="3" meta="last 7 days" />
        <KPI title="E-content assigned" value="12" meta="this month" />
      </section>

      <div className="main-grid" style={{marginTop:20}}>
        <section className="card">
          <h3 style={{margin:0}}>Top Misconceptions</h3>
          <ul style={{marginTop:12,color:'var(--muted)'}}>
            <li style={{padding:10,borderBottom:'1px solid rgba(255,255,255,0.03)'}}>Equivalent fractions — <strong>12 students</strong> <button style={{float:'right',background:'var(--accent)',border:'none',padding:'6px 8px',borderRadius:8}}>Assign remediation</button></li>
            <li style={{padding:10,borderBottom:'1px solid rgba(255,255,255,0.03)'}}>Angle types — <strong>8 students</strong> <button style={{float:'right',background:'var(--accent)',border:'none',padding:'6px 8px',borderRadius:8}}>Assign remediation</button></li>
          </ul>
        </section>

        <aside className="card">
          <h4 style={{margin:0}}>Quick Actions</h4>
          <div style={{marginTop:12,display:'flex',flexDirection:'column',gap:8}}>
            <Link href='/competency'><a className='btn-primary'>Create assessment</a></Link>
            <button className='btn-ghost'>Upload roster</button>
            <button className='btn-ghost'>Export report</button>
          </div>
          <div style={{marginTop:18}} className='small'>School: Greenfield Public</div>
        </aside>
      </div>
    </div>
  )
}
