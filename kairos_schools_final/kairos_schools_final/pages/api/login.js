
export default function handler(req,res){
  if(req.method==='POST'){
    const {email,pass}=req.body||{};
    if(email && pass) return res.status(200).json({ok:true,token:'mock-token',user:{name:'Demo Teacher',email}});
    return res.status(400).json({ok:false});
  }
  res.status(405).json({ok:false});
}
