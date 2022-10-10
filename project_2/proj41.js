const magicians_names = ["abc", "cde", "fgh"];

function show_magzine(b){
    for (let i = 0; i < b.length; i++) {
        const element = b[i];
        console.log(`Great ${element}`)
        
    }
    // console.log(`Great ${b} `)
}

const make_great = (names) => {
  for (let i = 0; i < names.length; i++) {
    const element = names[i];

    //    console.log(element)
  }
  const a =  names.slice(0);
  show_magzine(a);

};

make_great(magicians_names);
