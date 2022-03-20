function main() {
    // étape 1
    const { data, metriques, values, seuil } = get_data()

    // étape 2
    const matrice = get_graph(data, metriques);
    
    // étape 3
    const coloration = get_coloration(copy(matrice), seuil);

    // étape 4
    const cluster = get_cluster(coloration);

    display(cluster, values);
}

async function init() {
    await Data.load();
    main();
}

function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

document.getElementById("type").onchange = main;

document.getElementById("data").onchange = e => {
    Data.current_source = parseInt(e.target.value);
    main();
};

document.getElementById("seuil").onchange = e => {
    Data.source[Data.current_source].seuil = e.target.value;
    main();
};
init();
