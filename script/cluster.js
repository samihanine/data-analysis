function get_cluster(coloration) {
    let mes_clusteurs = [];

    for(let i=0; i<coloration.length; i++) {
        let color = coloration[i]

        if (!mes_clusteurs[color]) mes_clusteurs[color] = []
        mes_clusteurs[color].push(i);
    }

    return mes_clusteurs;
}