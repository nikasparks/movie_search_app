function outputData(characters){
    // console.log(characters)
    let character1st = 0
    let character2nd = 0
    let cardNums = []
    let i2 = 8
    let i1 = 0
    const indexNums = new Set();
    
    while (indexNums.size < 16){
        let x = getRndInteger(1,16)
        indexNums.add(x) 
    }
    indexNums.forEach((index) => {
        cardNums.push(index);
    })
    
    
    for (character1st of characters) {
        let card1 = document.querySelector(`#card${cardNums[i1]}`);
        let info1 = document.createElement('div')
        let charName1 = document.createElement('h3');

        let charPic1 = document.createElement('img');
        // console.log(card1);
        
        info1.setAttribute('class','gameCard');
        // charPic1.setAttribute('class',' hide');
        charPic1.setAttribute('src',character1st.image);
        charPic1.setAttribute('alt',character1st.name);
        charPic1.setAttribute('class', 'gameCardPic');
        charName1.innerHTML = character1st.name;

        console.log(charPic1)

        info1.appendChild(charPic1);
        info1.appendChild(charName1);
        card1.appendChild(info1);
        i1++
        
    };
}