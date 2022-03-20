function get_binary_matrice(matrice, seuil) {
    // on applique le seuil
    for(let i=0; i<matrice.length; i++) {
        for(let j=0; j<matrice.length; j++) {
            matrice[i][j] = matrice[i][j] > seuil ? 1 : 0;
        }
    }

    return matrice;
}


function get_coloration(matrice, seuil) {
    matrice = get_binary_matrice(matrice, seuil);

    let colors_array = matrice.map(item => 0);


    for(let i=0; i<matrice.length; i++) {
        let current = colors_array[i];

        for(let j=0; j<matrice[i].length; j++) {
            if (matrice[i][j] == 1 && colors_array[j] == current) {
                colors_array[j] = current+1;
            }
        }
    }

    return colors_array;
}


