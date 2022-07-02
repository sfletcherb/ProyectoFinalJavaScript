

const searchInput = async searchText =>{
    const res = await fetch('https://redfarma.000webhostapp.com/db.json');
    const data = await res.json(); 
    console.log(data);
    
    let matches = data.filter(medicamento =>{
        const regex = new RegExp(`^${searchText}`, 'gi')
        return medicamento.name.match(regex) || medicamento.abbr.match(regex);
    });
    console.log(matches);
};







