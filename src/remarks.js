//if 
const [state,setState] = useState(()=>{
    //function
    return 4;
})
//this will only execute once, it's better used with big computational functions

//steps

//create two divs one for the 3 editors and one for the iframe below , iframe has attributes
//then in the editor component import what you need and then create two divs
//one for the editor title and one for the actual editor
//onChange is onBeforeChange and options are from library

//create states for each editor

//css

//set the srcDoc attribute in iframe to the html, css, js combined
//create a state for it and make it change only after 250ms using useeffect
//and make sure to anticipate you changing code within that period

//make the editor container turn into a collapsed class based on the state of open or close