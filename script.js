async function getMatchData() {

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=136a4585-d184-430a-8d9c-07d41b816e1c&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchesList = data.data;

            if(!matchesList)return [];
            
            //add your api key from cricketdata.org
            // to get information only about particular series
            // const relevantData = matchesList.filter(match => match.series_id == "{series-id}").map(match => `${match.name}, ${match.status}`);
            const relevantData = matchesList.map(match => `${match.name}, ${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();