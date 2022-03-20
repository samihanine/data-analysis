function get_poids(data1, data2, metriques) {
    let poids = 0;

    for(let i=0; i<metriques.length; i++) {
        let attribut = metriques[i].attribut;

        if (data1[attribut] != data2[attribut]) {
            
            const sous_metriques = metriques[i].metriques;
            
            if (sous_metriques?.length > 0) {

                for(let j=0; j<sous_metriques.length; j++) {
                    if (data1[attribut].toLowerCase() == sous_metriques[j].a.toLowerCase() && data2[attribut].toLowerCase() == sous_metriques[j].b.toLowerCase() || data2[attribut].toLowerCase() == sous_metriques[j].a.toLowerCase() && data1[attribut].toLowerCase() == sous_metriques[j].b.toLowerCase())  {
                        poids += (sous_metriques[j].poids * metriques[i].poids)/sous_metriques.length;
                    }
                }
            } else {
                poids +=  metriques[i].poids;
            }
            
        }
    }

    return poids;
}

function get_graph(data, metriques) {
    let matrice = [];

    // pour chaque personne
    for(let i=0; i<data.length; i++) {
        matrice[i] = [];
        // pour chaque relation
        for(let j=0; j<data.length; j++) {

            const poids = get_poids(data[i], data[j], metriques)

            matrice[i][j] = poids;
        }
    }

    return matrice;
}