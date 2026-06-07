// Connect Google Sheet here later
const jobs=[
{name:'Cognizant Associate Engineer'},
{name:'Wipro System Engineer'}
];
document.getElementById('jobs').innerHTML=jobs.map(j=>`<p>${j.name}</p>`).join('');
