class Data {

    static source = []
    static current_source = 0;

    static async load() {
        const files = [
            ["../json/person.json", "../json/metriques.json"],
            ["../json/survey.json", "../json/metriques_survey.json"]
        ]

        for(const file of files) {
            const response1 = await fetch(file[0]);
            const data = await response1.json();
        
            const response2 = await fetch(file[1]);
            const metrique = await response2.json();

            Data.source.push({
                metriques: metrique.metriques,
                data: data,
                id: metrique.id,
                seuil: metrique.seuil
            })
        }
    }

    /*
    static generate_data(max) {
        max = max || 100;
        
        const metriques = Data.metriques;
        const id = Data.id;
        
        let datas = [];

        for(let i=0; i<max; i++) {
            let data = {};
            for(let j=0; j<metriques.length; j++) {
                if (metriques[j] == id) {
                    data[metriques[j].attribut] = (i + 9).toString(36).toUpperCase();
                } else {
                    data[metriques[j].attribut] = (Math.random() > 0.5);
                }
            }
    
            datas.push(data);
        }

        console.log(datas);

        return datas;
    }*/

    static get_values_name() {
        const current = Data.current_source;
        const id = Data.source[current].id;

        if (!id || id == "") {
            return Data.source[current].data.map((item, i) => (i + 9).toString(36).toUpperCase())
        } else {
            return Data.source[current].data.map(item => item[id])
        }

    }
}

function get_data() {
    const current = Data.current_source;
    document.getElementById("seuil").value = Data.source[current].seuil;

    return {
        data : Data.source[current].data,
        metriques: Data.source[current].metriques,
        values: Data.get_values_name(),
        seuil: Data.source[current].seuil
    }

}