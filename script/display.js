const COLORS = ["lightblue", "red", "lightgreen", "orange", "pink", "magenta", "lightgrey", "grey", "AntiqueWhite", "DarkSalmon", "Lavender", "Cyan"]


function display(clusters, values) {
    for(let i=0; i<clusters.length; i++) {
        clusters[i] = clusters[i].map(item => values[item]);
    }

    console.log(clusters)

    display_html(clusters);

    return clusters;
}

function display_html(clusters) {
    const container = document.getElementById("container");
    container.innerHTML = "";
    for(let i=0; i<clusters.length; i++) {
        const div = document.createElement("div");
        
        for(let j=0; j<clusters[i].length; j++) {
            const nom = document.createElement("div");
            nom.innerHTML = clusters[i][j];

            div.append(nom);
        }

        div.style.backgroundColor = COLORS[i];
        container.append(div);
    }
    
    display_canvas(clusters);
}

function display_canvas(clusters) {
    const data = {
        type: document.getElementById("type").value,
        data: {
          labels: clusters.map((item, index) => COLORS[index] || "black"),
          datasets: [{
            label: 'Size of clusters',
            data: clusters.map((item, index) => item.length),
            backgroundColor: clusters.map((item, index) => COLORS[index] || "black"),
            borderWidth: 1,
            borderColor: clusters.map((item, index) => "grey")
          }]
        },
        options: {
             //cutoutPercentage: 40,
          responsive: false,
      
        }
    }

    document.getElementById("chartReport").innerHTML = '<canvas id="myChart"></canvas>';
    const ctx = document.getElementById("myChart");
    new Chart(ctx, data);

}