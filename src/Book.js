function Book(firstBook=0,secondBook=0, thirdBook=0, forthBook=0, fifthBook=0) {
    let sum = 0;

    while(firstBook!=0 || secondBook!=0 || thirdBook!=0 || forthBook!=0 || fifthBook!=0) {
        let unique = 0;
        if (firstBook > 0) {
            unique += 1;
            firstBook --;
        }

        if (secondBook > 0) {
            unique += 1;
            secondBook --;
        }

        if (thirdBook > 0) {
            unique += 1;
            thirdBook --;
        }

        if (forthBook > 0) {
            unique += 1;
            forthBook --;
        }

        if (fifthBook > 0) {
            unique += 1;
            fifthBook --;
        }

        if (unique === 1) sum += 8;
        if (unique === 2) sum += 15.2;
        if (unique === 3) sum += 21.6;
        if (unique === 4) sum += 25.6;
        if (unique === 5) sum += 30;
    }

    return `${sum.toFixed(2)} EUR`;
}

Book(1,1,3,1,1);