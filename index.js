const h2=React.createElement('h2',{class:"h2"},'Learn Web Development');
const p1=React.createElement('p',{},'Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites ');
const div1=React.createElement('div',{} ,[p1]);
const p2=React.createElement('p',{},'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from the rest of MDN, and other intermediate to advanced resources that assume a lot of previous knowledge ');
const div2=React.createElement('div',{} ,[p2]);
const p3=React.createElement('p',{},'If you are a complete beginner, web development can be challenging - we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a nobbyist, or someone who just wants to understand more about how web technologies work');
const div3=React.createElement('div',{} ,[p3]);
const div =React.createElement('div',{ id:"div"} ,[h2,div1,div2,div3]);
ReactDOM.render(div,document.getElementById('root'));