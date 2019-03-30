import React, {Component} from 'react';


class Home extends Component {

    fetch_street_map() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(response.text);
            }
        };
        xhttp.open("GET", "home.css", true);
        xhttp.send();
    }

    render() {
        this.fetch_street_map();
        return(
            <div>
                
            </div>
        );
    }
}

export default Home;