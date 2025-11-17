
export default function handler(req,res){
  const reports=[
    {id:'r1',class:'5A',title:'Fractions misconceptions',date:'2025-10-12'},
    {id:'r2',class:'6B',title:'Angles & geometry',date:'2025-09-27'}
  ];
  res.status(200).json({ok:true,reports});
}
