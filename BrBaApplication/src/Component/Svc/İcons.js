import React from 'react';
import Svg, { Circle, Rect, Path, Mask, Line, G, ClipPath, Defs, LinearGradient, Stop, Symbol, XmlProps } from 'react-native-svg';

function Breaking(props) {
    return (
        <Svg width="140" height="56" viewBox="0 0 307 118" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path d="M130.031 45.0469H132.75C140.75 45.0469 144.75 50.1719 144.75 60.4219C143.969 60.8594 143.078 61.0781 142.078 61.0781H132.75C125.594 61.0781 122.016 61.75 122.016 63.0938C122.016 67.375 125.359 70.0469 132.047 71.1094H133.406C133.875 71.1094 136.547 70.2188 141.422 68.4375H142.078C142.734 68.4375 143.406 69.1094 144.094 70.4531C141.781 75.7969 139.109 78.4688 136.078 78.4688C139.203 76.0312 140.766 74.0312 140.766 72.4688C139.016 73.375 136.562 73.8281 133.406 73.8281H130.031C126.344 73.3594 123.234 73.125 120.703 73.125C120.703 74.9688 122.922 76.75 127.359 78.4688V79.1719H125.391C119.422 79.1719 115.625 73.8125 114 63.0938C114 53.25 118.016 47.4531 126.047 45.7031H126.703V46.4062C124.922 46.4062 124.031 46.8438 124.031 47.7188V48.375H124.688L126.047 47.7188L127.359 48.375C131.172 47.5 133.406 47.0625 134.062 47.0625V46.4062L130.031 45.7031V45.0469ZM123.375 57.0938L124.688 57.75H136.078L138.094 56.4375C136.875 52.8438 134.641 51.0469 131.391 51.0469H130.031C125.594 51.6719 123.375 53.6875 123.375 57.0938ZM169.031 46.3125H169.688C172.562 46.3125 174.297 49.7969 174.891 56.7656V76.3594L176.859 78.9844H176.203C175.203 78.9844 173.469 77.0312 171 73.125C169.688 73.125 169.031 72.4688 169.031 71.1562C163.312 73.7812 159.391 75.0938 157.266 75.0938C156.422 74.6562 155.766 74.4375 155.297 74.4375L154.641 75.7031V76.3594C154.641 77.6719 155.516 78.3281 157.266 78.3281V78.9844H155.953C151.203 78.9844 148.375 75.5 147.469 68.5312V67.875C149.781 62.6562 156.312 60.0469 167.062 60.0469L168.375 58.0781V55.5C167.656 53.75 166.125 52.875 163.781 52.875H161.203C159.422 52.875 156.578 53.9531 152.672 56.1094H152.062C151.438 56.1094 150.781 55.4688 150.094 54.1875V50.9062C150.094 50.2812 150.75 49.625 152.062 48.9375C152.062 49.4062 152.266 50.0625 152.672 50.9062L157.266 50.25H166.406C167.375 50.25 168.25 50.4688 169.031 50.9062C169.781 50.4688 170.656 50.25 171.656 50.25V49.5938L169.031 46.3125ZM153.984 68.5312C154.859 69.9375 155.297 71.0312 155.297 71.8125H161.203C165.984 71.8125 168.375 69.2031 168.375 63.9844C167.938 63.1406 167.719 62.4844 167.719 62.0156C159.125 63.1094 154.547 65.2812 153.984 68.5312ZM179.859 32.625H185.062C185.938 32.625 186.594 35.2344 187.031 40.4531C189.219 41.0156 190.312 41.6719 190.312 42.4219H189.656L190.312 43.6875V45C190.312 45.4375 190.094 45.6562 189.656 45.6562L190.312 46.9688V61.3594C190.438 62.2344 190.875 62.6719 191.625 62.6719C196.75 57.2031 200.453 54.1562 202.734 53.5312C203.391 53.9375 204.688 54.1406 206.625 54.1406V54.7969C201.844 58.6406 199.453 61.6875 199.453 63.9375C209.078 73.5312 214.094 78.3281 214.5 78.3281V78.9844H209.906L205.969 78.3281C205.125 78.7656 204.484 78.9844 204.047 78.9844L206.625 76.3594V75.7031C197.656 67.8906 192.656 63.9688 191.625 63.9375L190.312 65.9062V71.1562C190.312 73.3125 189.219 74.8281 187.031 75.7031L189 78.9844H179.859V78.3281C182.047 78.3281 183.141 76.375 183.141 72.4688V52.2188C183.141 50.6562 182.922 48.6875 182.484 46.3125C182.922 45.75 183.141 44.2344 183.141 41.7656V39.1406L182.484 37.8281H183.141C182.609 34.7969 181.516 33.2812 179.859 33.2812V32.625ZM204.047 46.9688H209.906L211.219 47.625V46.9688C212.062 47.4062 212.719 47.625 213.188 47.625V48.2812C211.125 48.2812 209.594 50.0312 208.594 53.5312H207.938C206.75 53.5312 205.453 53.0938 204.047 52.2188C204.047 52.6562 203.828 52.875 203.391 52.875V52.2188C203.953 50.4688 205.25 49.5938 207.281 49.5938V48.9375L204.047 47.625V46.9688ZM221.859 31.7344H223.172C223.797 31.7344 224.453 32.3906 225.141 33.7031V35.0156C225.141 35.8906 224.703 36.3281 223.828 36.3281H221.859C221.547 36.3281 220.891 35.6719 219.891 34.3594C220.547 32.6094 221.203 31.7344 221.859 31.7344ZM223.172 44.8594C225.359 45.4219 226.453 46.0781 226.453 46.8281C226.453 49.0156 225.797 50.1094 224.484 50.1094V51.4219H225.797V75.0938C225.797 76.2812 226.234 77.5938 227.109 79.0312H220.547L219.234 78.375L219.891 77.0625V63.9375C219.891 57.9375 220.547 54.2031 221.859 52.7344V50.7656C221.859 49.7344 220.328 48.6406 217.266 47.4844C217.266 46.5781 219.234 45.7031 223.172 44.8594ZM250.5 44.8125C257.594 44.8125 261.141 49.6875 261.141 59.4375V70.7812C261.141 74.5312 261.812 77.1875 263.156 78.75H255.141L257.812 75.4219C257.812 74.7031 256.266 73.8125 253.172 72.75C252.734 71.9688 252.516 71.0781 252.516 70.0781V53.4844C252.047 52.1406 250.703 51.4688 248.484 51.4688C242.734 52.4062 239.859 55.2969 239.859 60.1406C239.422 66.7031 239.203 71.125 239.203 73.4062C237.422 73.4062 236.531 73.8594 236.531 74.7656V76.0781C236.531 76.9844 237.203 77.4375 238.547 77.4375V78.75H229.875C231.656 76.9062 232.547 74.6875 232.547 72.0938V54.1406L231.891 52.7812H232.547C231.984 50.0312 231.094 47.8125 229.875 46.125H232.547C234.766 46.125 236.984 47.6875 239.203 50.8125C239.203 52.5938 239.641 53.4844 240.516 53.4844C242.891 50.8594 247.328 49.0781 253.828 48.1406C253.828 46.7969 251.828 46.125 247.828 46.125V45.4688C248.828 45.4688 249.719 45.25 250.5 44.8125ZM285.141 45.0469H287.156C294.281 46.7031 297.844 49.1562 297.844 52.4062V57.0938C297.844 63.1875 292.938 67.6406 283.125 70.4531C276.531 70.4531 271.844 66.4375 269.062 58.4062C268.625 57.6875 268.406 56.5781 268.406 55.0781C268.406 53.9219 269.297 51.9219 271.078 49.0781C271.672 49.5156 272.797 49.7344 274.453 49.7344L275.109 45.7031H277.125V46.4062L275.109 49.0781V49.7344H275.766C277.203 49.0156 279.219 48.3438 281.812 47.7188L291.844 50.3906C290.375 47.2656 288.141 45.7031 285.141 45.7031V45.0469ZM302.531 47.7188L303.188 49.0781V51.0469C303.188 51.7031 302.516 52.375 301.172 53.0625H300.516C299.641 53.0625 299.203 52.625 299.203 51.75V51.0469C299.203 50.4531 300.312 49.3438 302.531 47.7188ZM277.125 59.1094V60.4219C277.125 64.4531 278.906 66.4688 282.469 66.4688H284.484C287.203 66.4688 289.656 64.9062 291.844 61.7812V58.4062C291.219 53.9688 288.984 51.75 285.141 51.75H283.125C279.125 51.75 277.125 54.2031 277.125 59.1094ZM269.766 69.1406H270.422C270.422 69.5781 270.203 69.7969 269.766 69.7969C269.766 72.5781 270.875 74.5781 273.094 75.7969L277.781 75.1406C279.219 76.0469 280.328 76.5 281.109 76.5C286.734 76.0312 290.078 75.7969 291.141 75.7969C296.266 75.7969 299.844 78.0312 301.875 82.5C301.875 87.5 298.078 90.4062 290.484 91.2188C289.703 91.6562 288.812 91.875 287.812 91.875H279.094C278.219 91.875 277.781 91.4219 277.781 90.5156H284.484C294.297 89.6406 299.203 87.8594 299.203 85.1719C299.203 81.4531 296.516 79.2344 291.141 78.5156C285.609 79.3906 281.156 79.8281 277.781 79.8281C271.094 77.7031 267.75 75.9219 267.75 74.4844V71.1562C267.75 70.5 268.422 69.8281 269.766 69.1406ZM268.406 82.5H269.062V83.1562C269.062 84.1875 268.844 85.0938 268.406 85.875L271.078 90.5156H269.766C267.828 89.4219 266.484 87.875 265.734 85.875C266.609 83.8125 267.5 82.6875 268.406 82.5Z" fill="white" />
            <Rect x="2.5" y="2.5" width="105" height="105" fill="url(#paint0_linear_3_176)" stroke="#F7F4E6" strokeWidth="3" />
            <Path d="M15.752 81V28.44H32.672C36.176 28.44 39.224 29.016 41.816 30.168C44.456 31.272 46.496 32.832 47.936 34.848C49.424 36.864 50.168 39.216 50.168 41.904C50.168 44.88 49.352 47.376 47.72 49.392C46.136 51.36 43.976 52.608 41.24 53.136C44.312 53.664 46.76 55.056 48.584 57.312C50.408 59.568 51.32 62.4 51.32 65.808C51.32 68.832 50.552 71.496 49.016 73.8C47.528 76.056 45.44 77.832 42.752 79.128C40.064 80.376 36.92 81 33.32 81H15.752ZM26.192 49.608H32.528C34.64 49.608 36.296 49.056 37.496 47.952C38.696 46.8 39.296 45.264 39.296 43.344C39.296 41.376 38.696 39.864 37.496 38.808C36.296 37.704 34.64 37.152 32.528 37.152H26.192V49.608ZM26.192 72.288H32.888C35.24 72.288 37.088 71.664 38.432 70.416C39.776 69.168 40.448 67.44 40.448 65.232C40.448 63.024 39.776 61.296 38.432 60.048C37.088 58.752 35.24 58.104 32.888 58.104H26.192V72.288ZM60.0759 81V41.4H70.5159V48.96H70.7319C71.2599 46.368 72.4839 44.352 74.4039 42.912C76.3719 41.424 78.8439 40.68 81.8199 40.68C85.8519 40.68 89.0919 42.048 91.5399 44.784C93.9879 47.472 95.2119 51.144 95.2119 55.8V59.4H83.6919V56.52C83.6919 54.456 83.1399 52.872 82.0359 51.768C80.9799 50.616 79.4199 50.04 77.3559 50.04C73.0359 50.04 70.8759 52.488 70.8759 57.384V81H60.0759Z" fill="white" />
            <Defs>
                <LinearGradient id="paint0_linear_3_176" x1="105" y1="105" x2="5" y2="5" gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#066337" />
                    <Stop offset="0.489583" stopColor="#199458" />
                    <Stop offset="1" stopColor="#2AB670" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

function Bad(props) {
    return (
        <Svg width="140" height="56" viewBox="0 0 307 118" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path d="M142.641 27.6562H143.344L144.797 28.3594V27.6562C146.047 27.6562 147 29.3281 147.656 32.6719C147.188 33.4844 146.953 34.4375 146.953 35.5312H147.656C147.656 36 147.422 36.2344 146.953 36.2344L147.656 43.4062V75.6094C147.656 76.9219 148.141 78.3594 149.109 79.9219H146.953C145.328 77.1406 143.422 75 141.234 73.5V71.3438C139.984 71.3438 136.641 73.0156 131.203 76.3594H130.453L121.875 72.75V73.5L121.172 74.9062C116.859 73.6562 114.703 71.5156 114.703 68.4844V67.0312H119.016V65.5781L114 64.875V63.4688L114.703 62.0156L116.156 62.7188C117.094 62.7188 117.562 62.25 117.562 61.3125V57.7031H115.453V57C117.234 54.125 118.422 52.6875 119.016 52.6875C119.016 53.1875 119.25 53.4375 119.719 53.4375C119.719 49.625 122.828 47.7188 129.047 47.7188C132.672 47.7188 135.766 49.1406 138.328 51.9844C139.266 51.5156 139.984 51.2812 140.484 51.2812V41.9531C140.484 39.5781 141.922 37.6719 144.797 36.2344L145.5 34.8281C145.031 32.7969 143.609 30.6406 141.234 28.3594L142.641 27.6562ZM123.328 64.875C124.266 70.125 126.891 72.75 131.203 72.75C137.391 70.3438 140.484 67 140.484 62.7188V61.3125C140.484 55.5938 136.906 52.25 129.75 51.2812C125.469 52.25 123.328 55.8281 123.328 62.0156V64.875Z" fill="white" />
            <Rect x="2.5" y="2.5" width="105" height="105" fill="url(#paint0_linear_3_178)" stroke="#F7F4E6" strokeWidth="3" />
            <Path d="M15.752 81V28.44H32.672C36.176 28.44 39.224 29.016 41.816 30.168C44.456 31.272 46.496 32.832 47.936 34.848C49.424 36.864 50.168 39.216 50.168 41.904C50.168 44.88 49.352 47.376 47.72 49.392C46.136 51.36 43.976 52.608 41.24 53.136C44.312 53.664 46.76 55.056 48.584 57.312C50.408 59.568 51.32 62.4 51.32 65.808C51.32 68.832 50.552 71.496 49.016 73.8C47.528 76.056 45.44 77.832 42.752 79.128C40.064 80.376 36.92 81 33.32 81H15.752ZM26.192 49.608H32.528C34.64 49.608 36.296 49.056 37.496 47.952C38.696 46.8 39.296 45.264 39.296 43.344C39.296 41.376 38.696 39.864 37.496 38.808C36.296 37.704 34.64 37.152 32.528 37.152H26.192V49.608ZM26.192 72.288H32.888C35.24 72.288 37.088 71.664 38.432 70.416C39.776 69.168 40.448 67.44 40.448 65.232C40.448 63.024 39.776 61.296 38.432 60.048C37.088 58.752 35.24 58.104 32.888 58.104H26.192V72.288ZM70.6599 81.72C66.6759 81.72 63.5079 80.64 61.1559 78.48C58.8519 76.32 57.6999 73.392 57.6999 69.696C57.6999 65.664 59.1399 62.592 62.0199 60.48C64.8999 58.32 69.0279 57.24 74.4039 57.24H81.9639V54.36C81.9639 52.776 81.4119 51.552 80.3079 50.688C79.2039 49.824 77.6679 49.392 75.6999 49.392C73.7799 49.392 72.2439 49.776 71.0919 50.544C69.9879 51.312 69.4359 52.344 69.4359 53.64H59.3559C59.4519 49.656 61.0119 46.512 64.0359 44.208C67.0599 41.856 71.0919 40.68 76.1319 40.68C81.2679 40.68 85.3239 41.904 88.2999 44.352C91.2759 46.752 92.7639 50.088 92.7639 54.36V81H82.3239V74.88H82.1079C81.4359 77.04 80.1159 78.72 78.1479 79.92C76.1799 81.12 73.6839 81.72 70.6599 81.72ZM74.6919 73.872C76.8039 73.872 78.5319 73.32 79.8759 72.216C81.2679 71.112 81.9639 69.648 81.9639 67.824V63.648H74.6199C72.6999 63.648 71.1879 64.104 70.0839 65.016C69.0279 65.88 68.4999 67.104 68.4999 68.688C68.4999 70.32 69.0519 71.592 70.1559 72.504C71.2599 73.416 72.7719 73.872 74.6919 73.872Z" fill="white" />
            <Defs>
                <LinearGradient id="paint0_linear_3_178" x1="105" y1="105" x2="5" y2="5" gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#066337" />
                    <Stop offset="0.489583" stopColor="#199458" />
                    <Stop offset="1" stopColor="#2AB670" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

function TabBarBreakingBad() {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
            <Path fill="#000000" d="M24,24H4V4h20V24z M44,24H24v20h20V24z" />
            <Path fill='#2AB670' d="M7,8h5.2c1.8,0,3.3,1.4,3.3,3.2c0,1.2-0.7,2.5-1.9,2.8v0c1.5,0.2,2.4,1.4,2.4,2.7c0,2.7-2,3.3-4.3,3.3H7V8z M9,13h2.5c0.9,0,1.7-0.4,1.7-1.5c0-0.9-0.5-1.5-1.7-1.5H9V13z M9,18.2h2.8c1.3,0,2-0.4,2-1.5c0-1.2-0.8-1.6-2-1.6H9V18.2z M26,28h5.2c1.8,0,3.3,1.4,3.3,3.2c0,1.2-0.7,2.5-1.9,2.8v0c1.5,0.2,2.4,1.4,2.4,2.7c0,2.7-2,3.3-4.3,3.3H26V28z M28,33h2.5c0.9,0,1.7-0.4,1.7-1.5c0-0.9-0.5-1.5-1.7-1.5H28V33z M28,38.2h2.8c1.3,0,2-0.4,2-1.5c0-1.2-0.8-1.6-2-1.6H28V38.2z M17,12h2v1.3h0c0.4-0.9,1-1.3,2-1.3v2c-1.2,0-2,0.5-2,2.2V20h-2V12z M42,38.5c0,0.8,0.2,1.1,0.2,1.3h-1.6c-0.1-0.2-0.2-0.5-0.2-0.7c-0.6,0.6-1.3,0.9-2.1,0.9c-1.2,0-2.4-0.9-2.4-2.4c0-1.5,1.2-2.2,2.1-2.4l0.6-0.2c0.6-0.1,1.3-0.3,1.7-0.5v-0.2c0-0.8-0.5-1-1.2-1c-0.9,0-1.2,0.3-1.2,1.1l-1.5-0.1c0-1.8,1.3-2.5,2.7-2.5c1.4,0,2.8,0.3,2.8,2.5L42,38.5L42,38.5z M39.5,36.5l-0.6,0.2c-0.4,0.1-0.8,0.3-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8c0.5,0,1.2-0.3,1.2-1.1v-0.9C40,36.2,39.7,36.4,39.5,36.5z" />
        </Svg>
    )
}

function TabBarBreakingBadPress() {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
            <Path fill="#fff" d="M24,24H4V4h20V24z M44,24H24v20h20V24z" />
            <Path fill='#066337' d="M7,8h5.2c1.8,0,3.3,1.4,3.3,3.2c0,1.2-0.7,2.5-1.9,2.8v0c1.5,0.2,2.4,1.4,2.4,2.7c0,2.7-2,3.3-4.3,3.3H7V8z M9,13h2.5c0.9,0,1.7-0.4,1.7-1.5c0-0.9-0.5-1.5-1.7-1.5H9V13z M9,18.2h2.8c1.3,0,2-0.4,2-1.5c0-1.2-0.8-1.6-2-1.6H9V18.2z M26,28h5.2c1.8,0,3.3,1.4,3.3,3.2c0,1.2-0.7,2.5-1.9,2.8v0c1.5,0.2,2.4,1.4,2.4,2.7c0,2.7-2,3.3-4.3,3.3H26V28z M28,33h2.5c0.9,0,1.7-0.4,1.7-1.5c0-0.9-0.5-1.5-1.7-1.5H28V33z M28,38.2h2.8c1.3,0,2-0.4,2-1.5c0-1.2-0.8-1.6-2-1.6H28V38.2z M17,12h2v1.3h0c0.4-0.9,1-1.3,2-1.3v2c-1.2,0-2,0.5-2,2.2V20h-2V12z M42,38.5c0,0.8,0.2,1.1,0.2,1.3h-1.6c-0.1-0.2-0.2-0.5-0.2-0.7c-0.6,0.6-1.3,0.9-2.1,0.9c-1.2,0-2.4-0.9-2.4-2.4c0-1.5,1.2-2.2,2.1-2.4l0.6-0.2c0.6-0.1,1.3-0.3,1.7-0.5v-0.2c0-0.8-0.5-1-1.2-1c-0.9,0-1.2,0.3-1.2,1.1l-1.5-0.1c0-1.8,1.3-2.5,2.7-2.5c1.4,0,2.8,0.3,2.8,2.5L42,38.5L42,38.5z M39.5,36.5l-0.6,0.2c-0.4,0.1-0.8,0.3-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8c0.5,0,1.2-0.3,1.2-1.1v-0.9C40,36.2,39.7,36.4,39.5,36.5z" />
        </Svg>
    )
}

function Heart({ size, fill, ...props }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z" fill={fill} stroke={fill} strokeWidth="0.6" />
        </Svg>
    )
}

function HeartPress({ size, fill, ...props }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path fillRule="evenodd" clipRule="evenodd" d="M16.4537 1.25C20.2694 1.25 22.8333 4.88188 22.8333 8.27C22.8333 15.1316 12.1926 20.75 12 20.75C11.8074 20.75 1.16666 15.1316 1.16666 8.27C1.16666 4.88188 3.73055 1.25 7.54629 1.25C9.73703 1.25 11.1694 2.35906 12 3.33406C12.8305 2.35906 14.263 1.25 16.4537 1.25Z" fill={fill} stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

function Heisenberg() {
    return (
        <Svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="35px" height="35px">
            <Path d="M 15.912109 5.9101562 C 13.434109 5.9101563 12.609375 14.171875 12.609375 14.171875 C 12.609375 14.171875 18.696 15.123047 25 15.123047 C 31.304 15.123047 37.390625 14.171875 37.390625 14.171875 C 37.390625 14.171875 36.565891 5.9101562 34.087891 5.9101562 C 29.969891 5.9101563 28.884 6.7363281 25 6.7363281 C 21.116 6.7363281 20.005109 5.9101562 15.912109 5.9101562 z M 7.4785156 16.490234 C 7.0946562 16.558484 6.7692344 16.850406 6.6777344 17.253906 C 6.5547344 17.791906 6.8906875 18.326219 7.4296875 18.449219 C 7.5696055 18.481508 9.2565551 18.852266 12 19.236328 L 12 22 L 12 22.972656 C 11.492 22.985656 9 23.118828 9 26.548828 C 9 28.965828 10.563797 30.173406 11.591797 30.566406 C 12.012492 31.971789 14.222634 38.510252 19.404297 41.496094 C 20.67466 43.22612 23.618263 44 25 44 C 26.381737 44 29.32534 43.22612 30.595703 41.496094 C 35.777366 38.510252 37.987508 31.971789 38.408203 30.566406 C 39.436203 30.173406 41 28.965828 41 26.548828 C 41 23.117828 38.508 22.984656 38 22.972656 L 38 22 L 38 19.236328 C 40.743445 18.852266 42.430394 18.481508 42.570312 18.449219 C 43.109313 18.326219 43.445266 17.792906 43.322266 17.253906 C 43.200266 16.715906 42.666 16.376 42.125 16.5 C 42.054 16.516 34.875 18.126953 25 18.126953 C 15.125 18.126953 7.946 16.517 7.875 16.5 C 7.74025 16.469 7.6064688 16.467484 7.4785156 16.490234 z M 13 19.369141 C 16.055248 19.759601 20.174262 20.128906 25 20.128906 C 29.825738 20.128906 33.944752 19.759601 37 19.369141 L 37 22.140625 C 34.999987 22.41108 30.08096 23 25 23 C 19.91904 23 15.000013 22.41108 13 22.140625 L 13 19.369141 z M 12.011719 24.001953 C 14.923897 24.01916 14.503273 30 18.078125 30 L 20.285156 30 C 24.281156 30 23.104 25.746094 25 25.746094 C 26.896 25.746094 25.719844 30 29.714844 30 L 31.921875 30 C 35.496727 30 35.076103 24.01916 37.988281 24.001953 C 38.86262 24.047523 40 24.497119 40 26.548828 C 40 29.098828 37.589844 29.767578 37.589844 29.767578 C 37.589844 29.767578 35.822031 36.347986 31.195312 39.853516 C 31.203457 39.677449 31.201997 39.496903 31.177734 39.308594 C 30.971734 37.712594 30.787609 36.201797 30.599609 35.091797 C 30.249609 33.026797 27.48 32 25 32 C 22.52 32 19.750391 33.026797 19.400391 35.091797 C 19.212391 36.200797 19.028266 37.712594 18.822266 39.308594 C 18.798003 39.496903 18.796543 39.677449 18.804688 39.853516 C 14.177969 36.347986 12.410156 29.767578 12.410156 29.767578 C 12.410156 29.767578 10 29.098828 10 26.548828 C 10 24.497119 11.13738 24.047523 12.011719 24.001953 z M 25 34.707031 C 26.749 35.652031 28.199219 35.527281 28.199219 36.863281 L 28.199219 38.400391 C 28.199219 39.866391 26.599609 40.352531 26.599609 39.894531 L 26.599609 39.041016 C 26.599609 38.065016 25.927 37.601562 25 37.601562 C 24.073 37.601562 23.400391 38.065016 23.400391 39.041016 L 23.400391 39.894531 C 23.400391 40.352531 21.800781 39.866391 21.800781 38.400391 L 21.800781 36.863281 C 21.800781 35.527281 23.251 35.652031 25 34.707031 z" />
        </Svg>
    )
}

function HeisenbergPress() {
    return (
        <Svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="35px" height="35px">
            <Path d="M 15.912109 5.9101562 C 13.434109 5.9101563 12.609375 14.171875 12.609375 14.171875 C 12.609375 14.171875 18.696 15.123047 25 15.123047 C 31.304 15.123047 37.390625 14.171875 37.390625 14.171875 C 37.390625 14.171875 36.565891 5.9101562 34.087891 5.9101562 C 29.969891 5.9101563 28.884 6.7363281 25 6.7363281 C 21.116 6.7363281 20.005109 5.9101562 15.912109 5.9101562 z M 7.4785156 16.490234 C 7.0946562 16.558484 6.7692344 16.850406 6.6777344 17.253906 C 6.5547344 17.791906 6.8906875 18.326219 7.4296875 18.449219 C 7.5696055 18.481508 9.2565551 18.852266 12 19.236328 L 12 22 L 12 22.972656 C 11.492 22.985656 9 23.118828 9 26.548828 C 9 28.965828 10.563797 30.173406 11.591797 30.566406 C 12.012492 31.971789 14.222634 38.510252 19.404297 41.496094 C 20.67466 43.22612 23.618263 44 25 44 C 26.381737 44 29.32534 43.22612 30.595703 41.496094 C 35.777366 38.510252 37.987508 31.971789 38.408203 30.566406 C 39.436203 30.173406 41 28.965828 41 26.548828 C 41 23.117828 38.508 22.984656 38 22.972656 L 38 22 L 38 19.236328 C 40.743445 18.852266 42.430394 18.481508 42.570312 18.449219 C 43.109313 18.326219 43.445266 17.792906 43.322266 17.253906 C 43.200266 16.715906 42.666 16.376 42.125 16.5 C 42.054 16.516 34.875 18.126953 25 18.126953 C 15.125 18.126953 7.946 16.517 7.875 16.5 C 7.74025 16.469 7.6064688 16.467484 7.4785156 16.490234 z M 13 19.369141 C 16.055248 19.759601 20.174262 20.128906 25 20.128906 C 29.825738 20.128906 33.944752 19.759601 37 19.369141 L 37 22.140625 C 34.999987 22.41108 30.08096 23 25 23 C 19.91904 23 15.000013 22.41108 13 22.140625 L 13 19.369141 z M 12.011719 24.001953 C 14.923897 24.01916 14.503273 30 18.078125 30 L 20.285156 30 C 24.281156 30 23.104 25.746094 25 25.746094 C 26.896 25.746094 25.719844 30 29.714844 30 L 31.921875 30 C 35.496727 30 35.076103 24.01916 37.988281 24.001953 C 38.86262 24.047523 40 24.497119 40 26.548828 C 40 29.098828 37.589844 29.767578 37.589844 29.767578 C 37.589844 29.767578 35.822031 36.347986 31.195312 39.853516 C 31.203457 39.677449 31.201997 39.496903 31.177734 39.308594 C 30.971734 37.712594 30.787609 36.201797 30.599609 35.091797 C 30.249609 33.026797 27.48 32 25 32 C 22.52 32 19.750391 33.026797 19.400391 35.091797 C 19.212391 36.200797 19.028266 37.712594 18.822266 39.308594 C 18.798003 39.496903 18.796543 39.677449 18.804688 39.853516 C 14.177969 36.347986 12.410156 29.767578 12.410156 29.767578 C 12.410156 29.767578 10 29.098828 10 26.548828 C 10 24.497119 11.13738 24.047523 12.011719 24.001953 z M 25 34.707031 C 26.749 35.652031 28.199219 35.527281 28.199219 36.863281 L 28.199219 38.400391 C 28.199219 39.866391 26.599609 40.352531 26.599609 39.894531 L 26.599609 39.041016 C 26.599609 38.065016 25.927 37.601562 25 37.601562 C 24.073 37.601562 23.400391 38.065016 23.400391 39.041016 L 23.400391 39.894531 C 23.400391 40.352531 21.800781 39.866391 21.800781 38.400391 L 21.800781 36.863281 C 21.800781 35.527281 23.251 35.652031 25 34.707031 z" />
        </Svg>
    )
}



export {
    Breaking,
    Bad,
    TabBarBreakingBad,
    TabBarBreakingBadPress,
    Heart,
    HeartPress,
    Heisenberg,
    HeisenbergPress,
}