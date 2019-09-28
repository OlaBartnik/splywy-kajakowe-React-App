import React from 'react';
import "./wkramap.scss";
import "../../../../Components/Tooltip/tooltip.scss"

class Wkramap extends React.Component {
    constructor(props) {
        super(props);
        this.onToggleOpen = this.onToggleOpen.bind(this);
        this.onToggleClose = this.onToggleClose.bind(this);

        this.state = {
            "style": {
                "left": 0,
                "top": 0
            },
            "text": '',
            "classTooltip": "hide",

        }
    }

    onToggleClose(e) {
        let state = this.state;
        state['classTooltip'] = 'hide';
        this.setState(state);
    }

    onToggleOpen(e) {
        let tooltipclass = '';
        if (e.currentTarget.dataset.class === "tooltipBig") {
            tooltipclass = 'tooltipBig';
        } else if (e.currentTarget.dataset.class === "last") {
            tooltipclass = 'last';
        } else if (e.currentTarget.dataset.class === "first") {
            tooltipclass = 'first';
        }

        this.setState({
            "style": {
                "left": e.clientX,
                "top": e.clientY
            },
            "text": e.currentTarget.dataset.text,
            "classTooltip": tooltipclass
        })

    }

    render() {
        return (<div className={"wkraMapStyle container"}>
            <div style={this.state.style} className={"tooltipWkra " + this.state.classTooltip}>
                {this.state.text}
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1080.111"
                height="146.31"
                version="1.1"
                viewBox="0 0 285.779 38.711"
            >
                <g transform="translate(109.639 -198.684)">
                    <ellipse
                        cx="186.121"
                        cy="296.316"
                        fill="maroon"
                        fillOpacity="1"
                        stroke="none"
                        strokeDasharray="none"
                        strokeMiterlimit="4"
                        strokeOpacity="1"
                        strokeWidth="0.871"
                        opacity="1"
                        rx="3.079"
                        ry="3.202"
                    />
                    <g transform="translate(.456 .684)">
                        <path
                            fill="none"
                            stroke="#31708e"
                            strokeDasharray="none"
                            strokeLinecap="butt"
                            strokeLinejoin="round"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="4.09"
                            d="M-86.193 216.526s-.299-6.721 2.144-8.026c.999-.534 3.217 1.096 3.217 1.096s1.455 5.04 3.592 5.886c1.07.422 3.326-.922 3.326-.922s3.943 1.007 5.785.421c1.757-.558 3.011-2.168 4.272-3.513 2.684-2.865 3.295-7.95 6.874-9.564 3.718-1.677 12.177 1.222 12.177 1.222s7.403-.045 9.822 2.288c1.64 1.58 1.79 6.591 1.79 6.591 10.92-6.676 4.274.787 7.208 1.296 0 0 7.958-4.492 12.032-3.551 3.244.75 3.979 4.635 7.308 4.69 3.914.065 5.08-5.31 8.985-5.584 3.761-.265 9.54 6.079 9.54 6.079 4.101 2.613 8.805-5.119 12.93-6.763 2.424-.966 6.806.74 9.925 2.033 3.107 1.29 5.21 4.364 8.417 5.57 1.74.653 3.858.741 5.574.029 1.862-.774 2.238-4.487 4.247-4.31 1.1.098.791 2.52 1.875 2.73 3.215.626 7.646-2.545 10.515-4.125 2.802-1.545 3.67-5.13 6.433-5.235 5.725-.217 8.28 10.232 14.113 9.808 4.856-.353 6.503-8.269 11.261-9.299 4.47-.968 8.675 3.393 13.245 3.578 1.743.07 3.537-1.628 5.145-.953 3.325 1.395 6.045 8.971 6.045 8.971s5.114 14.206 11.185 14.388c2.72.08 5.387-6.135 5.387-6.135 2.982-6.629 2.327-4.92 4.364-5.54 4.714-1.439 14.044 4.635 14.044 4.635"
                        />
                        <ellipse
                            data-text="Most drogowy. Na brzegach rozległe trawiaste płaszczyzny używane do celów piknikowych. Las sosnowy. Przez około kilometr rzeka o szerokości 30 - 50 metrów płynie przez rezerwat przyrody „Dolina Wkry”."
                            onMouseEnter={this.onToggleOpen} onMouseLeave={this.onToggleClose}
                            cx="122.028"
                            cy="218.994"
                            fill="maroon"
                            fillOpacity="1"
                            stroke="none"
                            strokeDasharray="none"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="0.871"
                            opacity="1"
                            rx="3.079"
                            ry="3.202"
                        />
                        <ellipse
                            data-text="Kamienisty niewysoki próg w miejscu dawnego mostu. Na skarpie znajduje się sklep, przy którym jest obelisk upamiętniający miejsce historyczne wojny w 1920 roku. Obroną tego odcinka dowodził Generał Władysław Sikorski."
                            onMouseEnter={this.onToggleOpen} onMouseLeave={this.onToggleClose}
                            cx="95.797"
                            cy="206.221"
                            fill="maroon"
                            fillOpacity="1"
                            stroke="none"
                            strokeDasharray="none"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="0.871"
                            opacity="1"
                            rx="3.079"
                            ry="3.202"
                        />
                        <ellipse data-class="tooltipBig"
                                 data-text="Most, przed nim zwężenie nurtu - miejsce po starym młynie. Na prawym brzegu wieś Szumlin i domki letniskowe. Po prawej bar i przystań kajakowa. Płynąc dalej przepływamy przez miejsce zwane dębami, które jest pozostałością po prastarej dębowej puszczy szumalskiej. Historia głosi, że hodowano w niej konie dla rodziny Sobieskich."
                                 onMouseEnter={this.onToggleOpen} onMouseLeave={this.onToggleClose}
                                 cx="33.301"
                                 cy="209.642"
                                 fill="maroon"
                                 fillOpacity="1"
                                 stroke="none"
                                 strokeDasharray="none"
                                 strokeMiterlimit="4"
                                 strokeOpacity="1"
                                 strokeWidth="0.871"
                                 opacity="1"
                                 rx="3.079"
                                 ry="3.202"
                        />
                        <ellipse
                            data-text="Przed mostem drogowym po prawej stronie dwa bary i przystanie. Dogodne miejsce na odpoczynek i posiłek. Płynąc dalej na lewym brzegu rozciągają się kompleksy leśne, zaś prawy brzeg łagodnie schodzi ku wodzie. W okół liczne domki letniskowe."
                            onMouseEnter={this.onToggleOpen} onMouseLeave={this.onToggleClose}
                            cx="61.812"
                            cy="212.607"
                            fill="maroon"
                            fillOpacity="1"
                            stroke="none"
                            strokeDasharray="none"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="0.871"
                            opacity="1"
                            rx="3.079"
                            ry="3.202"
                        />
                        <ellipse data-class="tooltipBig"
                                 data-text="Most drogowy. Po prawej stronie plaża i kąpielisko. W korycie rzeki pozostałości dawnego mostu - zaleca się przepływać prawą stroną. Po ok 30 min płynięcia pojawia się niewielka wyspa, zauważalne zwężenie nurtu. Jest to miejsce po starym młynie nazywane przez miejscowych „groblą”."
                                 onMouseEnter={this.onToggleOpen} onMouseLeave={this.onToggleClose}
                                 cx="17.107"
                                 cy="213.519"
                                 fill="maroon"
                                 fillOpacity="1"
                                 stroke="none"
                                 strokeDasharray="none"
                                 strokeMiterlimit="4"
                                 strokeOpacity="1"
                                 strokeWidth="0.871"
                                 opacity="1"
                                 rx="3.079"
                                 ry="3.202"
                        />
                        <ellipse data-class="last"
                                 data-text="Most drogowy i kolejowy. Sklepy i bar na lewym brzegu. Z prawej barokowy kościół. Z lewej możliwość biwakowania na rozległych łąkach nad płytką rzeką."
                                 onMouseEnter={this.onToggleOpen} onMouseLeave={this.onToggleClose}
                                 cx="155.101"
                                 cy="222.643"
                                 fill="maroon"
                                 fillOpacity="1"
                                 stroke="none"
                                 strokeDasharray="none"
                                 strokeMiterlimit="4"
                                 strokeOpacity="1"
                                 strokeWidth="0.871"
                                 opacity="1"
                                 rx="3.079"
                                 ry="3.202"
                        />
                        <ellipse
                            data-text="Most drogowy. Przed mostem po lewej stronie barek i przystań kajakowa. Z uwagi na drewniane pale, pod mostem należy  przepływać lewą stroną. Po ok 10 minutach na prawym brzegu wznosi się Górka Napoleona, miejsce związane z przemarszem wojsk napoleońskich."
                            onMouseEnter={this.onToggleOpen} onMouseLeave={this.onToggleClose}
                            cx="-10.264"
                            cy="212.379"
                            fill="maroon"
                            fillOpacity="1"
                            stroke="none"
                            strokeDasharray="none"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="0.871"
                            opacity="1"
                            rx="3.079"
                            ry="3.202"
                        />
                        <ellipse data-class="first"
                                 data-text="Most drogowy. Z prawej ceglany gotycki kościół. Na stromej skarpie Wkry rezerwat „Dziektarzewo” chroniący naturalny las mieszany."
                                 onMouseEnter={this.onToggleOpen} onMouseLeave={this.onToggleClose}
                                 cx="-86.193"
                                 cy="216.526"
                                 fill="maroon"
                                 fillOpacity="1"
                                 stroke="none"
                                 strokeDasharray="none"
                                 strokeMiterlimit="4"
                                 strokeOpacity="1"
                                 strokeWidth="0.871"
                                 opacity="1"
                                 rx="3.079"
                                 ry="3.202"
                        />
                        <ellipse
                            data-text="Most drogowy. Rzeka jest tu bardzo płytka, dno piaszczyste, to świetne miejsce by zażyć kąpieli."
                            onMouseEnter={this.onToggleOpen} onMouseLeave={this.onToggleClose}
                            cx="-64.321"
                            cy="211.923"
                            fill="maroon"
                            fillOpacity="1"
                            stroke="none"
                            strokeDasharray="none"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="0.871"
                            opacity="1"
                            rx="3.079"
                            ry="3.202"
                        />
                        <ellipse
                            data-text="Most drogowy - przed nim na lewym brzegu częściowo drewniany a częściowo murowany kościół (XVI - XVIII w), obok sklep."
                            onMouseEnter={this.onToggleOpen} onMouseLeave={this.onToggleClose}
                            cx="-54.057"
                            cy="201.203"
                            fill="maroon"
                            fillOpacity="1"
                            stroke="none"
                            strokeDasharray="none"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="0.871"
                            opacity="1"
                            rx="3.079"
                            ry="3.202"
                        />
                        <ellipse
                            data-text="Most drewniany. Na zboczach rzeki domki letniskowe oraz miejsce na biwak, kąpielisko. Na prawym brzegu sosnowy las."
                            onMouseEnter={this.onToggleOpen} onMouseLeave={this.onToggleClose}
                            cx="-40.941"
                            cy="203.453"
                            fill="maroon"
                            fillOpacity="1"
                            stroke="none"
                            strokeDasharray="none"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="0.871"
                            opacity="1"
                            rx="3.079"
                            ry="3.202"
                        />
                        <text
                            x="146.876"
                            y="231.87"
                            fill="#000"
                            fillOpacity="1"
                            stroke="none"
                            strokeWidth="0.265"
                            fontFamily="sans-serif"
                            fontSize="4.233"
                            fontStretch="normal"
                            fontStyle="normal"
                            fontVariant="normal"
                            fontWeight="normal"
                            style={{
                                lineHeight: "1.25",
                                InkscapeFontSpecification: "'sans-serif, Normal'",
                                fontVariantLigatures: "normal",
                                fontVariantCaps: "normal",
                                fontVariantNumeric: "normal",
                                fontFeatureSettings: "normal",
                                WebkitTextAlign: "start",
                                textAlign: "start"
                            }}
                            letterSpacing="0.005"
                            textAnchor="start"
                            wordSpacing="0"
                            writingMode="lr-tb"
                            xmlSpace="preserve"
                        >
                            <tspan x="146.876" y="231.87" strokeWidth="0.265">
                                Pomiechówek
                            </tspan>
                        </text>
                        <text
                            x="97.252"
                            y="225.869"
                            fill="#000"
                            fillOpacity="1"
                            stroke="none"
                            strokeWidth="0.265"
                            fontFamily="sans-serif"
                            fontSize="4.233"
                            fontStretch="normal"
                            fontStyle="normal"
                            fontVariant="normal"
                            fontWeight="normal"
                            style={{
                                lineHeight: "1.25",
                                InkscapeFontSpecification: "'sans-serif, Normal'",
                                fontVariantLigatures: "normal",
                                fontVariantCaps: "normal",
                                fontVariantNumeric: "normal",
                                fontFeatureSettings: "normal",
                                WebkitTextAlign: "start",
                                textAlign: "start"
                            }}
                            letterSpacing="0.005"
                            textAnchor="start"
                            wordSpacing="0"
                            writingMode="lr-tb"
                            xmlSpace="preserve"
                        >
                            <tspan x="97.252" y="225.869" strokeWidth="0.265">
                                Śniadówko
                            </tspan>
                        </text>
                        <text
                            x="91.526"
                            y="216.692"
                            fill="#000"
                            fillOpacity="1"
                            stroke="none"
                            strokeWidth="0.265"
                            fontFamily="sans-serif"
                            fontSize="4.233"
                            fontStretch="normal"
                            fontStyle="normal"
                            fontVariant="normal"
                            fontWeight="normal"
                            style={{
                                lineHeight: "1.25",
                                InkscapeFontSpecification: "'sans-serif, Normal'",
                                fontVariantLigatures: "normal",
                                fontVariantCaps: "normal",
                                fontVariantNumeric: "normal",
                                fontFeatureSettings: "normal",
                                WebkitTextAlign: "start",
                                textAlign: "start"
                            }}
                            letterSpacing="0.005"
                            textAnchor="start"
                            wordSpacing="0"
                            writingMode="lr-tb"
                            xmlSpace="preserve"
                        >
                            <tspan x="91.526" y="216.692" strokeWidth="0.265">
                                Borkowo
                            </tspan>
                        </text>
                        <text
                            x="55.836"
                            y="221.082"
                            fill="#000"
                            fillOpacity="1"
                            stroke="none"
                            strokeWidth="0.265"
                            fontFamily="sans-serif"
                            fontSize="4.233"
                            fontStretch="normal"
                            fontStyle="normal"
                            fontVariant="normal"
                            fontWeight="normal"
                            style={{
                                lineHeight: "1.25",
                                InkscapeFontSpecification: "'sans-serif, Normal'",
                                fontVariantLigatures: "normal",
                                fontVariantCaps: "normal",
                                fontVariantNumeric: "normal",
                                fontFeatureSettings: "normal",
                                WebkitTextAlign: "start",
                                textAlign: "start"
                            }}
                            letterSpacing="0.005"
                            textAnchor="start"
                            wordSpacing="0"
                            writingMode="lr-tb"
                            xmlSpace="preserve"
                        >
                            <tspan x="55.836" y="221.082" strokeWidth="0.265">
                                Joniec
                            </tspan>
                        </text>
                        <text
                            x="26.877"
                            y="221.141"
                            fill="#000"
                            fillOpacity="1"
                            stroke="none"
                            strokeWidth="0.265"
                            fontFamily="sans-serif"
                            fontSize="4.233"
                            fontStretch="normal"
                            fontStyle="normal"
                            fontVariant="normal"
                            fontWeight="normal"
                            style={{
                                lineHeight: "1.25",
                                InkscapeFontSpecification: "'sans-serif, Normal'",
                                fontVariantLigatures: "normal",
                                fontVariantCaps: "normal",
                                fontVariantNumeric: "normal",
                                fontFeatureSettings: "normal",
                                WebkitTextAlign: "start",
                                textAlign: "start"
                            }}
                            letterSpacing="0.005"
                            textAnchor="start"
                            wordSpacing="0"
                            writingMode="lr-tb"
                            xmlSpace="preserve"
                        >
                            <tspan x="26.877" y="221.141" strokeWidth="0.265">
                                Sobieski
                            </tspan>
                        </text>
                        <text
                            x="7.968"
                            y="222.567"
                            fill="#000"
                            fillOpacity="1"
                            stroke="none"
                            strokeWidth="0.265"
                            fontFamily="sans-serif"
                            fontSize="4.233"
                            fontStretch="normal"
                            fontStyle="normal"
                            fontVariant="normal"
                            fontWeight="normal"
                            style={{
                                lineHeight: "1.25",
                                InkscapeFontSpecification: "'sans-serif, Normal'",
                                fontVariantLigatures: "normal",
                                fontVariantCaps: "normal",
                                fontVariantNumeric: "normal",
                                fontFeatureSettings: "normal",
                                WebkitTextAlign: "start",
                                textAlign: "start"
                            }}
                            letterSpacing="0.005"
                            textAnchor="start"
                            wordSpacing="0"
                            writingMode="lr-tb"
                            xmlSpace="preserve"
                        >
                            <tspan x="7.968" y="222.567" strokeWidth="0.265">
                                Bolęcin
                            </tspan>
                        </text>
                        <text
                            x="-18.357"
                            y="219.657"
                            fill="#000"
                            fillOpacity="1"
                            stroke="none"
                            strokeWidth="0.265"
                            fontFamily="sans-serif"
                            fontSize="4.233"
                            fontStretch="normal"
                            fontStyle="normal"
                            fontVariant="normal"
                            fontWeight="normal"
                            style={{
                                lineHeight: "1.25",
                                InkscapeFontSpecification: "'sans-serif, Normal'",
                                fontVariantLigatures: "normal",
                                fontVariantCaps: "normal",
                                fontVariantNumeric: "normal",
                                fontFeatureSettings: "normal",
                                WebkitTextAlign: "start",
                                textAlign: "start"
                            }}
                            letterSpacing="0.005"
                            textAnchor="start"
                            wordSpacing="0"
                            writingMode="lr-tb"
                            xmlSpace="preserve"
                        >
                            <tspan x="-18.357" y="219.657" strokeWidth="0.265">
                                Sochocin
                            </tspan>
                        </text>
                        <text
                            x="-48.236"
                            y="213.487"
                            fill="#000"
                            fillOpacity="1"
                            stroke="none"
                            strokeWidth="0.265"
                            fontFamily="sans-serif"
                            fontSize="4.233"
                            fontStretch="normal"
                            fontStyle="normal"
                            fontVariant="normal"
                            fontWeight="normal"
                            style={{
                                lineHeight: "1.25",
                                InkscapeFontSpecification: "'sans-serif, Normal'",
                                fontVariantLigatures: "normal",
                                fontVariantCaps: "normal",
                                fontVariantNumeric: "normal",
                                fontFeatureSettings: "normal",
                                WebkitTextAlign: "start",
                                textAlign: "start"
                            }}
                            letterSpacing="0.005"
                            textAnchor="start"
                            wordSpacing="0"
                            writingMode="lr-tb"
                            xmlSpace="preserve"
                        >
                            <tspan x="-48.236" y="213.487" strokeWidth="0.265">
                                Kępa
                            </tspan>
                        </text>
                        <text
                            x="-58.449"
                            y="209.228"
                            fill="#000"
                            fillOpacity="1"
                            stroke="none"
                            strokeWidth="0.265"
                            fontFamily="sans-serif"
                            fontSize="4.233"
                            fontStretch="normal"
                            fontStyle="normal"
                            fontVariant="normal"
                            fontWeight="normal"
                            style={{
                                lineHeight: "1.25",
                                InkscapeFontSpecification: "'sans-serif, Normal'",
                                fontVariantLigatures: "normal",
                                fontVariantCaps: "normal",
                                fontVariantNumeric: "normal",
                                fontFeatureSettings: "normal",
                                WebkitTextAlign: "start",
                                textAlign: "start"
                            }}
                            letterSpacing="0.005"
                            textAnchor="start"
                            wordSpacing="0"
                            writingMode="lr-tb"
                            xmlSpace="preserve"
                        >
                            <tspan x="-58.449" y="209.228" strokeWidth="0.265">
                                Malużyn
                            </tspan>
                        </text>
                        <text
                            x="-74.064"
                            y="223.422"
                            fill="#000"
                            fillOpacity="1"
                            stroke="none"
                            strokeWidth="0.265"
                            fontFamily="sans-serif"
                            fontSize="4.233"
                            fontStretch="normal"
                            fontStyle="normal"
                            fontVariant="normal"
                            fontWeight="normal"
                            style={{
                                lineHeight: "1.25",
                                InkscapeFontSpecification: "'sans-serif, Normal'",
                                fontVariantLigatures: "normal",
                                fontVariantCaps: "normal",
                                fontVariantNumeric: "normal",
                                fontFeatureSettings: "normal",
                                WebkitTextAlign: "start",
                                textAlign: "start"
                            }}
                            letterSpacing="0.005"
                            textAnchor="start"
                            wordSpacing="0"
                            writingMode="lr-tb"
                            xmlSpace="preserve"
                        >
                            <tspan x="-74.064" y="223.422" strokeWidth="0.265">
                                Płaciszewo
                            </tspan>
                        </text>
                        <text
                            x="-110.509"
                            y="224.791"
                            fill="#000"
                            fillOpacity="1"
                            stroke="none"
                            strokeWidth="0.265"
                            fontFamily="sans-serif"
                            fontSize="4.233"
                            fontStretch="normal"
                            fontStyle="normal"
                            fontVariant="normal"
                            fontWeight="normal"
                            style={{
                                lineHeight: "1.25",
                                InkscapeFontSpecification: "'sans-serif, Normal'",
                                fontVariantLigatures: "normal",
                                fontVariantCaps: "normal",
                                fontVariantNumeric: "normal",
                                fontFeatureSettings: "normal",
                                WebkitTextAlign: "start",
                                textAlign: "start"
                            }}
                            letterSpacing="0.005"
                            textAnchor="start"
                            wordSpacing="0"
                            writingMode="lr-tb"
                            xmlSpace="preserve"
                        >
                            <tspan x="-110.509" y="224.791" strokeWidth="0.265">
                                Dziektarzewo
                            </tspan>
                        </text>
                        <path
                            fill="none"
                            stroke="#000"
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeOpacity="1"
                            strokeWidth="0.265"
                            d="M5.318 232.262l44.25-.228M49.567 232.034l-4.79 3.421M49.567 232.034l-5.018-3.877"
                        />
                        <text
                            x="6.002"
                            y="247.316"
                            fill="#000"
                            fillOpacity="1"
                            stroke="none"
                            strokeWidth="0.265"
                            fontFamily="sans-serif"
                            fontSize="4.233"
                            fontStretch="normal"
                            fontStyle="normal"
                            fontVariant="normal"
                            fontWeight="normal"
                            letterSpacing="0.005"
                            textAnchor="start"
                            wordSpacing="0"
                            writingMode="lr-tb"
                            xmlSpace="preserve"
                            style={{
                                lineHeight: "1.25",
                                InkscapeFontSpecification: "'sans-serif, Normal'",
                                fontVariantLigatures: "normal",
                                fontVariantCaps: "normal",
                                fontVariantNumeric: "normal",
                                fontFeatureSettings: "normal",
                                WebkitTextAlign: "start",
                                textAlign: "start"
                            }}
                        />
                        <text
                            x="6.458"
                            y="231.35"
                            fill="#000"
                            fillOpacity="1"
                            stroke="none"
                            strokeWidth="0.265"
                            fontFamily="sans-serif"
                            fontSize="3.528"
                            fontStretch="normal"
                            fontStyle="normal"
                            fontVariant="normal"
                            fontWeight="normal"
                            letterSpacing="0.005"
                            textAnchor="start"
                            wordSpacing="0"
                            writingMode="lr-tb"
                            xmlSpace="preserve"
                            style={{
                                lineHeight: "0",
                                InkscapeFontSpecification: "'sans-serif, Normal'",
                                fontVariantLigatures: "normal",
                                fontVariantCaps: "normal",
                                fontVariantNumeric: "normal",
                                fontFeatureSettings: "normal",
                                WebkitTextAlign: "start",
                                textAlign: "start"
                            }}
                        >
                            <tspan
                                style={{lineHeight: "0"}}
                                x="6.458"
                                y="231.35"
                                strokeWidth="0.265"
                            >
                                KIERUNEK SPŁYWU
                            </tspan>
                        </text>
                        <ellipse data-text="PRZENOSKA lewą stroną przy małej elektrowni wodnej w Bolęcinie."
                                 onMouseEnter={this.onToggleOpen} onMouseLeave={this.onToggleClose}
                                 cx="215.363"
                                 cy="26.45"
                                 fill="#ffde17"
                                 fillOpacity="0.941"
                                 stroke="none"
                                 strokeDasharray="none"
                                 strokeMiterlimit="4"
                                 strokeOpacity="1"
                                 strokeWidth="0.428"
                                 opacity="1"
                                 rx="1.488"
                                 ry="1.601"
                                 transform="matrix(.1807 .98354 -.98857 .15076 0 0)"
                        />
                        <ellipse
                            data-text="Jaz i bystrze - pozostałości po dawnym młynie. Miejsce niebezpieczne, PRZENOSKA lewą stroną na wysokości betonowych umocnień po dawnym młynie."
                            onMouseEnter={this.onToggleOpen} onMouseLeave={this.onToggleClose}
                            cx="205.3"
                            cy="52.759"
                            fill="#ffde17"
                            fillOpacity="0.941"
                            stroke="none"
                            strokeDasharray="none"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="0.428"
                            opacity="1"
                            rx="1.488"
                            ry="1.601"
                            transform="matrix(.1807 .98354 -.98857 .15076 0 0)"
                        />
                        <ellipse data-class="tooltipBig"
                                 data-text="Pozostałości po drewnianym moście w Gutarzewie. PRZENOSKA lewą stroną, po prawej stronie plaża i miejsce na odpoczynek. Można dostrzec wieżę z lufą niemieckiego czołgu Pantera, który podczas ucieczki w 1945 roku przed Rosjanami runął z drewnianego mostu do rzeki."
                                 onMouseEnter={this.onToggleOpen} onMouseLeave={this.onToggleClose}
                                 cx="207.04"
                                 cy="64.132"
                                 fill="#ffde17"
                                 fillOpacity="0.941"
                                 stroke="none"
                                 strokeDasharray="none"
                                 strokeMiterlimit="4"
                                 strokeOpacity="1"
                                 strokeWidth="0.428"
                                 opacity="1"
                                 rx="1.488"
                                 ry="1.601"
                                 transform="matrix(.1807 .98354 -.98857 .15076 0 0)"
                        />
                        <ellipse
                            cx="233.93"
                            cy="29.382"
                            fill="#ffde17"
                            fillOpacity="0.941"
                            stroke="none"
                            strokeDasharray="none"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="0.428"
                            opacity="1"
                            rx="1.488"
                            ry="1.601"
                            transform="matrix(.1807 .98354 -.98857 .15076 0 0)"
                        />
                        <text
                            x="15.81"
                            y="235.799"
                            fill="#000"
                            fillOpacity="1"
                            stroke="none"
                            strokeWidth="0.265"
                            fontFamily="sans-serif"
                            fontSize="3.528"
                            fontStretch="normal"
                            fontStyle="normal"
                            fontVariant="normal"
                            fontWeight="normal"
                            letterSpacing="0.005"
                            textAnchor="start"
                            wordSpacing="0"
                            writingMode="lr-tb"
                            xmlSpace="preserve"
                            style={{
                                lineHeight: "1.25",
                                InkscapeFontSpecification: "'sans-serif, Normal'",
                                fontVariantLigatures: "normal",
                                fontVariantCaps: "normal",
                                fontVariantNumeric: "normal",
                                fontFeatureSettings: "normal",
                                WebkitTextAlign: "start",
                                textAlign: "start"
                            }}
                        >
                            <tspan x="15.81" y="235.799" strokeWidth="0.265">
                                PRZENOSKA
                            </tspan>
                        </text>
                    </g>
                </g>
            </svg>
        </div>)

    }
}

export default Wkramap;