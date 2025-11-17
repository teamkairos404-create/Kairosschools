
import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';

export default function Login(){
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const [loading,setLoading] = useState(false);
  const router = useRouter();

  async function handle(e){
    e.preventDefault();
    setLoading(true);
    try{
      const res = await fetch('/api/login',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({email,pass})});
      const j = await res.json();
      if(j.ok) router.push('/dashboard');
      else alert('Login failed');
    }catch(err){ alert('Network error') }
    setLoading(false);
  }

  return (
    <div>
      <Header />
      <main className="container" style={{maxWidth:520,marginTop:36}}>
        <div className="card">
          <h2>Teacher sign in</h2>
          <form className="form" onSubmit={handle}>
            <input className="input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input className="input" placeholder="Password" type="password" value={pass} onChange={(e)=>setPass(e.target.value)} />
            <div style={{display:'flex',gap:10}}>
              <button className="btn-primary" disabled={loading}>{loading ? 'Signing...' : 'Sign in'}</button>
              <button type="button" className="btn-ghost" onClick={()=>{setEmail('teacher@example.com'); setPass('password')}}>Fill test</button>
            </div>
            <div className="small" style={{marginTop:8}}>This is a mock sign-in (no real auth yet).</div>
          </form>
        </div>
      </main>
    </div>
  );
}
