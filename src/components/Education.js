import jsPDF from 'jspdf';
import React, {Component} from 'react';
import {Button} from 'reactstrap';
import Logo from './a.png';
import './Education.css';


class Edcuation extends Component {
    pdfGenerate=()=>{
        var doc=new jsPDF('landscape', 'px', 'a4', 'false');
        doc.addImage(Logo, 'PNG', 65, 20, 500,400)
        doc.addPage()
        doc.save('a.pdf')
        
    }
 render () {
    return (
        <div class="container1" id="Education">
      <div style={{textAlign:'center'}}> <br/>
         <Button onClick={this.pdfGenerate}>Download pdf</Button>
    
      

       <h1>Resume</h1>
  <div class="main-timeline">

                 
                   <div class="timeline">
                       <div class="icon"></div>
                       <div class="date-content">
                           <div class="date-outer">
                               <span class="date">
                                       <span class="month">2 Years</span>
                               <span class="year">2013-2015</span>
                               </span>
                           </div>
                       </div>
                       <div class="timeline-content">
                           <h5 class="title">East LA College</h5>
                           <p class="description">
                               Accounting
                           </p>
                       </div>
                   </div>
                  
                   <div class="timeline">
                       <div class="icon"></div>
                       <div class="date-content">
                           <div class="date-outer">
                               <span class="date">
                                       <span class="month">2 Years</span>
                               <span class="year">2015-2017</span>
                               </span>
                           </div>
                       </div>
                       <div class="timeline-content">
                           <h5 class="title">University of State LA</h5>
                           <p class="description">
                              Accounting
                           </p>
                       </div>
                   </div>
                   

            
                   <div class="timeline">
                       <div class="icon"></div>
                       <div class="date-content">
                           <div class="date-outer">
                               <span class="date">
                                       <span class="month">6 Months</span>
                               <span class="year">2021</span>
                               </span>
                           </div>
                       </div>
                       <div class="timeline-content">
                           <h5 class="title">Web Designer</h5>
                           <p class="description">
                           <ul>
             <li>APIs</li>
             <li>Node</li>
             <li>Express</li>
             <li>MySQL, Sequelize</li>
             <li>MongoDB</li>
             <li>Mongoose</li>
             <li>REST</li>
             <li>GraphQL</li>
             <br />
             <br />
             <br />
             <br />
           </ul>
                           </p>
                       </div>
                   </div>
               

                
                 </div>

               </div>
</div>
    )
  }

}

export default Edcuation;






















// import React from 'react'
// import './Education.css';
// function Education() {
//     return (
      
      
      
      
//       <div class="container" id="Education">
//             <h1>Resume</h1>
//        <div class="main-timeline">

                      
//                         <div class="timeline">
//                             <div class="icon"></div>
//                             <div class="date-content">
//                                 <div class="date-outer">
//                                     <span class="date">
//                                             <span class="month">2 Years</span>
//                                     <span class="year">2013-2015</span>
//                                     </span>
//                                 </div>
//                             </div>
//                             <div class="timeline-content">
//                                 <h5 class="title">East LA College</h5>
//                                 <p class="description">
//                                     Accounting
//                                 </p>
//                             </div>
//                         </div>
                       
//                         <div class="timeline">
//                             <div class="icon"></div>
//                             <div class="date-content">
//                                 <div class="date-outer">
//                                     <span class="date">
//                                             <span class="month">2 Years</span>
//                                     <span class="year">2015-2017</span>
//                                     </span>
//                                 </div>
//                             </div>
//                             <div class="timeline-content">
//                                 <h5 class="title">University of State LA</h5>
//                                 <p class="description">
//                                    Accounting
//                                 </p>
//                             </div>
//                         </div>
                        

                 
//                         <div class="timeline">
//                             <div class="icon"></div>
//                             <div class="date-content">
//                                 <div class="date-outer">
//                                     <span class="date">
//                                             <span class="month">6 Months</span>
//                                     <span class="year">2021</span>
//                                     </span>
//                                 </div>
//                             </div>
//                             <div class="timeline-content">
//                                 <h5 class="title">Web Designer</h5>
//                                 <p class="description">
//                                 <ul>
//                   <li>APIs</li>
//                   <li>Node</li>
//                   <li>Express</li>
//                   <li>MySQL, Sequelize</li>
//                   <li>MongoDB</li>
//                   <li>Mongoose</li>
//                   <li>REST</li>
//                   <li>GraphQL</li>
//                   <br />
//                   <br />
//                   <br />
//                   <br />
//                 </ul>
//                                 </p>
//                             </div>
//                         </div>
                    

                     
                      

//                     </div>
// </div>



//     )
// }

// export default Education