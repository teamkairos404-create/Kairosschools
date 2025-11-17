
export default function KPI({title,value,meta}){
  return (
    <div className='kpi'>
      <div style={{fontSize:12,color:'var(--muted)'}}>{title}</div>
      <div style={{fontSize:20,fontWeight:700,marginTop:8}}>{value}</div>
      <div style={{fontSize:12,color:'var(--muted)',marginTop:8}}>{meta}</div>
    </div>
  )
}
