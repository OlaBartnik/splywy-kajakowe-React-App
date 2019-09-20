import React from 'react';
import "./wkra.scss";
import Wkramap from "./wkramap";
import API from "../../../../Components/API/api";
import Slider from "../../../../Components/Slider/slider";

class RouteSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: "start",
            end: "end",
            distance: "",
            duration: "",
            messageTitle: "",
            messageFirst: "",
            messageSecond: "",
            messageThird: ""
        }
    }


    handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({[name]: value});


    }
    setEndPoint = e => {
        const start = this.state.start;
        const endOptions = document.querySelectorAll("#endSelect option");


        if (start === "Dziektarzewo") {
            endOptions.forEach((option) => {
                if (option.dataset.id === "Płaciszewo" || option.dataset.id === "Małużyn" || option.dataset.id === "Kępa" || option.dataset.id === "Sochocin") {
                    option.classList.remove("hide")
                } else {
                    option.classList.add("hide")
                }
            })

        } else if (start === "Płaciszewo") {
            endOptions.forEach((option) => {
                if (option.dataset.id === "Małużyn" || option.dataset.id === "Kępa" || option.dataset.id === "Sochocin") {
                    option.classList.remove("hide")
                } else {
                    option.classList.add("hide")
                }
            })

        } else if (start === "Małużyn") {
            endOptions.forEach((option) => {
                if (option.dataset.id === "Sochocin") {
                    option.classList.remove("hide")
                } else {
                    option.classList.add("hide")
                }
            })

        } else if (start === "Kępa") {
            endOptions.forEach((option) => {
                if (option.dataset.id === "Sochocin" || option.dataset.id === "Bolęcin" || option.dataset.id === "Sobieski" || option.dataset.id === "Joniec") {
                    option.classList.remove("hide")
                } else {
                    option.classList.add("hide")
                }
            })

        } else if (start === "Sochocin") {
            endOptions.forEach((option) => {
                if (option.dataset.id === "Bolęcin" || option.dataset.id === "Sobieski" || option.dataset.id === "Joniec") {
                    option.classList.remove("hide")
                } else {
                    option.classList.add("hide")
                }
            })

        } else if (start === "Bolęcin") {
            endOptions.forEach((option) => {
                if (option.dataset.id === "Sobieski" || option.dataset.id === "Joniec") {
                    option.classList.remove("hide")
                } else {
                    option.classList.add("hide")
                }
            })

        } else if (start === "Sobieski") {
            endOptions.forEach((option) => {
                if (option.dataset.id === "Joniec" || option.dataset.id === "Borkowo") {
                    option.classList.remove("hide")
                } else {
                    option.classList.add("hide")
                }
            })

        } else if (start === "Joniec") {
            endOptions.forEach((option) => {
                if (option.dataset.id === "Borkowo" || option.dataset.id === "Śniadówko" || option.dataset.id === "Pomiechówek") {
                    option.classList.remove("hide")
                } else {
                    option.classList.add("hide")
                }
            })

        }

    }
    setStartPoint = e => {
        const end = this.state.end;
        const startOptions = document.querySelectorAll("#startSelect option");


        if (end === "Płaciszewo") {

            startOptions.forEach((option) => {
                if (option.dataset.id === "Dziektarzewo") {
                    option.classList.remove("hide")
                } else {
                    option.classList.add("hide")
                }
            })
        } else if (end === "Małużyn" || end === "Kępa") {

            startOptions.forEach((option) => {
                if (option.dataset.id === "Dziektarzewo" || option.dataset.id === "Płaciszewo") {
                    option.classList.remove("hide")
                } else {
                    option.classList.add("hide")
                }
            })
        } else if (end === "Sochocin") {

            startOptions.forEach((option) => {
                if (option.dataset.id === "Dziektarzewo" || option.dataset.id === "Płaciszewo" || option.dataset.id === "Małużyn" || option.dataset.id === "Kępa") {
                    option.classList.remove("hide")
                } else {
                    option.classList.add("hide")
                }
            })
        } else if (end === "Bolęcin") {
            startOptions.forEach((option) => {
                if (option.dataset.id === "Kępa" || option.dataset.id === "Sochocin") {
                    option.classList.remove("hide")
                } else {
                    option.classList.add("hide")
                }
            })
        } else if (end === "Sobieski") {
            startOptions.forEach((option) => {
                if (option.dataset.id === "Kępa" || option.dataset.id === "Sochocin" || option.dataset.id === "Bolęcin") {
                    option.classList.remove("hide")
                } else {
                    option.classList.add("hide")
                }
            })
        } else if (end === "Joniec") {
            startOptions.forEach((option) => {
                if (option.dataset.id === "Kępa" || option.dataset.id === "Sochocin" || option.dataset.id === "Bolęcin" || option.dataset.id === "Sobieski") {
                    option.classList.remove("hide")
                } else {
                    option.classList.add("hide")
                }
            })
        } else if (end === "Borkowo") {
            startOptions.forEach((option) => {
                if (option.dataset.id === "Sobieski" || option.dataset.id === "Joniec") {
                    option.classList.remove("hide")
                } else {
                    option.classList.add("hide")
                }
            })
        } else if (end === "Śniadówko" || end === "Pomiechówek") {
            startOptions.forEach((option) => {
                if (option.dataset.id === "Joniec") {
                    option.classList.remove("hide")
                } else {
                    option.classList.add("hide")
                }
            })
        }


    }

    handleSubmit = e => {
        e.preventDefault();
        const startOptions = document.querySelectorAll("#startSelect option");
        const endOptions = document.querySelectorAll("#endSelect option");
        startOptions.forEach((option) => {
            option.classList.remove("hide")
        });
        endOptions.forEach((option) => {
            option.classList.remove("hide")
        });


        const {start} = this.state;
        const {end} = this.state;
        let distance = [];
        let minDuration = [];
        let maxDuration = [];
        let messageTitle = [];
        let messageFirst = [];
        let messageSecond = [];
        let messageThird = [];

        if (start === "Dziektarzewo" && end === "Płaciszewo") {
            distance.push(8);
            minDuration.push(2.5);
            maxDuration.push(3);
        } else if (start === "Dziektarzewo" && end === "Małużyn") {
            distance.push(12.6);
            minDuration.push(3.5);
            maxDuration.push(4);
        } else if (start === "Dziektarzewo" && end === "Kępa") {
            distance.push(15.6);
            minDuration.push(4);
            maxDuration.push(5);
        } else if (start === "Dziektarzewo" && end === "Sochocin") {
            distance.push(23.6);
            minDuration.push(6);
            maxDuration.push(7);
            messageTitle.push("UWAGA PRZENOSKA!");
            messageFirst.push("Gutarzewo: pare kilometrów przed Sochocinem. Pod drewnianym mostem jaz, widoczne pale - pozostałości po konstrukcji mostu i spiętrzenia.  Przenoska prawą stroną rzeki.")
        } else if (start === "Płaciszewo" && end === "Małużyn") {
            distance.push(4.6);
            minDuration.push(1);
            maxDuration.push(1.5)
        } else if (start === "Płaciszewo" && end === "Kępa") {
            distance.push(7.6);
            minDuration.push(2);
            maxDuration.push(2.5)
        } else if (start === "Płaciszewo" && end === "Sochocin") {
            distance.push(15.6);
            minDuration.push(4);
            maxDuration.push(5);
            messageTitle.push("UWAGA PRZENOSKA!");
            messageFirst.push("Gutarzewo: pare kilometrów przed Sochocinem. Pod drewnianym mostem jaz, widoczne pale - pozostałości po konstrukcji mostu i spiętrzenia.  Przenoska prawą stroną rzeki.")
        } else if (start === "Małużyn" && end === "Sochocin") {
            distance.push(11);
            minDuration.push(3);
            maxDuration.push(4);
            messageTitle.push("UWAGA PRZENOSKA!");
            messageFirst.push("Gutarzewo: pare kilometrów przed Sochocinem. Pod drewnianym mostem jaz, widoczne pale - pozostałości po konstrukcji mostu i spiętrzenia.  Przenoska prawą stroną rzeki.")
        } else if (start === "Kępa" && end === "Sochocin") {
            distance.push(8.5);
            minDuration.push(2.5);
            maxDuration.push(3);
            messageTitle.push("UWAGA PRZENOSKA!");
            messageFirst.push("Gutarzewo: pare kilometrów przed Sochocinem. Pod drewnianym mostem jaz, widoczne pale - pozostałości po konstrukcji mostu i spiętrzenia.  Przenoska prawą stroną rzeki.")
        } else if (start === "Kępa" && end === "Bolęcin") {
            distance.push(15);
            minDuration.push(3.5);
            maxDuration.push(4.5);
            messageTitle.push("UWAGA DWIE PRZENOSKI!");
            messageFirst.push("Gutarzewo: pare kilometrów przed Sochocinem. Pod drewnianym mostem jaz, widoczne pale - pozostałości po konstrukcji mostu i spiętrzenia.  Przenoska prawą stroną rzeki.") ;
            messageSecond.push("Sochocin:  jaz i bystrze - pozostałości po dawnym młynie. Miejsce niebezpieczne, przenoska lewą stroną na wysokości betonowych umocnień po dawnym młynie.")
        } else if (start === "Kępa" && end === "Sobieski") {
            distance.push(19);
            minDuration.push(5.5);
            maxDuration.push(6);
            messageTitle.push("UWAGA TRZY PRZENOSKI!");
            messageFirst.push("Gutarzewo: pare kilometrów przed Sochocinem. Pod drewnianym mostem jaz, widoczne pale - pozostałości po konstrukcji mostu i spiętrzenia.  Przenoska prawą stroną rzeki.")  ;
            messageSecond.push("Sochocin:  jaz i bystrze - pozostałości po dawnym młynie. Miejsce niebezpieczne, przenoska lewą stroną na wysokości betonowych umocnień po dawnym młynie.") ;
            messageThird.push("Bolęcin - przenoska lewą stroną przy małej elektrowni wodnej (ok. 10 m.).")
        } else if (start === "Kępa" && end === "Joniec") {
            distance.push(26);
            minDuration.push(7);
            maxDuration.push(8);
            messageTitle.push("UWAGA TRZY PRZENOSKI!");
            messageFirst.push("Gutarzewo: pare kilometrów przed Sochocinem. Pod drewnianym mostem jaz, widoczne pale - pozostałości po konstrukcji mostu i spiętrzenia.  Przenoska prawą stroną rzeki.")  ;
            messageSecond.push("Sochocin:  jaz i bystrze - pozostałości po dawnym młynie. Miejsce niebezpieczne, przenoska lewą stroną na wysokości betonowych umocnień po dawnym młynie.") ;
            messageThird.push("Bolęcin - przenoska lewą stroną przy małej elektrowni wodnej (ok. 10 m.).")
        } else if (start === "Sochocin" && end === "Bolęcin") {
            distance.push(6.5);
            minDuration.push(2);
            maxDuration.push(2.5);
        } else if (start === "Sochocin" && end === "Sobieski") {
            distance.push(10.5);
            minDuration.push(3);
            maxDuration.push(4);
            messageTitle.push("UWAGA PRZENOSKA!");
            messageFirst.push("Bolęcin - przenoska lewą stroną przy małej elektrowni wodnej (ok. 10 m.).")
        } else if (start === "Sochocin" && end === "Joniec") {
            distance.push(17.5);
            minDuration.push(4);
            maxDuration.push(5);
            messageTitle.push("UWAGA PRZENOSKA!");
            messageFirst.push("Bolęcin - przenoska lewą stroną przy małej elektrowni wodnej (ok. 10 m.).")
        } else if (start === "Bolęcin" && end === "Sobieski") {
            distance.push(4);
            minDuration.push(1);
            maxDuration.push(1.5);
        } else if (start === "Bolęcin" && end === "Joniec") {
            distance.push(11);
            minDuration.push(3);
            maxDuration.push(4);
        } else if (start === "Sobieski" && end === "Joniec") {
            distance.push(7);
            minDuration.push(2);
            maxDuration.push(2.5);
        } else if (start === "Sobieski" && end === "Borkowo") {
            distance.push(18);
            minDuration.push(4.5);
            maxDuration.push(5.5);
        } else if (start === "Joniec" && end === "Borkowo") {
            distance.push(10.5);
            minDuration.push(3);
            maxDuration.push(4);
        } else if (start === "Joniec" && end === "Śniadówko") {
            distance.push(17.3);
            minDuration.push(4);
            maxDuration.push(5);
        } else if (start === "Joniec" && end === "Pomiechówek") {
            distance.push(26);
            minDuration.push(7);
            maxDuration.push(8);
        }

        this.setState({
            distance: `${distance}km`,
            duration: `${minDuration}-${maxDuration}h`,
            messageTitle: messageTitle,
            messageFirst: messageFirst,
            messageSecond: messageSecond,
            messageThird: messageThird
        })
    }

    render() {
        return (
            <div className={"formContainer"}>

                <form onSubmit={this.handleSubmit}>
                    <label> Start spływu
                        <select id="startSelect" name="start" value={this.state.start}
                                onChange={this.handleChange}
                                onClick={this.setEndPoint}
                        >
                            <option id="startPoint" value="start" disabled={true}>Wybierz początek trasy</option>
                            <option data-id="Dziektarzewo" value="Dziektarzewo">Dziektarzewo</option>
                            <option data-id="Płaciszewo" value="Płaciszewo">Płaciszewo</option>
                            <option data-id="Małużyn" value="Małużyn">Małużyn</option>
                            <option data-id="Kępa" value="Kępa">Kępa</option>
                            <option data-id="Sochocin" value="Sochocin">Sochocin</option>
                            <option data-id="Bolęcin" value="Bolęcin">Bolęcin</option>
                            <option data-id="Sobieski" value="Sobieski">Sobieski</option>
                            <option data-id="Joniec" value="Joniec">Joniec</option>
                        </select>
                    </label>
                    <label> Koniec spływu
                        <select id="endSelect" name="end" value={this.state.end}
                                onChange={this.handleChange}
                                onClick={this.setStartPoint}>
                            <option id="endPoint" value="end" disabled={true}>Wybierz koniec trasy</option>
                            <option data-id="Płaciszewo" value="Płaciszewo">Płaciszewo</option>
                            <option data-id="Małużyn" value="Małużyn">Małużyn</option>
                            <option data-id="Kępa" value="Kępa">Kępa</option>
                            <option data-id="Sochocin" value="Sochocin">Sochocin</option>
                            <option data-id="Bolęcin" value="Bolęcin">Bolęcin</option>
                            <option data-id="Sobieski" value="Sobieski">Sobieski</option>
                            <option data-id="Joniec" value="Joniec">Joniec</option>
                            <option data-id="Borkowo" value="Borkowo">Borkowo</option>
                            <option data-id="Śniadówko" value="Śniadówko">Śniadówko</option>
                            <option data-id="Pomiechówek" value="Pomiechówek">Pomiechówek</option>
                        </select>
                    </label>
                    <input type="submit" value="Wyznacz trasę"/>
                </form>
                <div className={"formSummary"}>
                    {this.state.distance !== "" ?
                        <h3>Kilometry do przepłynięcia: {this.state.distance}</h3> : null}
                    {this.state.duration !== "" ?
                        <h3>Średni czas spływu: {this.state.duration} </h3> : null}
                    {this.state.messageTitle !== "" ?
                        <h3>{this.state.messageTitle} </h3> : null}
                    {this.state.messageFirst !== "" ?
                        <p>{this.state.messageFirst} </p> : null}
                    {this.state.messageSecond !== "" ?
                        <p>{this.state.messageSecond} </p> : null}
                    {this.state.messageThird !== "" ?
                        <p>{this.state.messageThird} </p> : null}

                </div>
            </div>

        )
    }
}

class Wkra extends React.Component {
    render() {
        return <div className={"mainPageStyle"} style={{"background-color": "#f7f9fb"}}>
            <RouteSelection/>
            <Wkramap/>
            {/*<API/>*/}
            <Slider/>

        </div>
    }
}

export default Wkra;